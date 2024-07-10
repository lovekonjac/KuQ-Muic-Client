<template>
    <div class="talkContent">
        <div class="talkShow">
            <div :class="[(item.person == 'mechanical') ? 'mechanicalTalk' : 'mineTalk']" v-for="(item, index) in talkList"
                :key="index">
                <span>{{ item.say }}</span>
            </div>
        </div>
        <div class="talkInput">
            <form @submit.prevent="getQuestion" class="userSearch">
                <el-input placeholder="请输入内容" v-model="contentVal" size="middle" class="centered-input">
                    <i slot="suffix" class="el-input__icon el-icon-position" style="cursor: pointer;"
                        @click="getQuestion"></i>
                </el-input>

            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            talkList: [
                { id: "1", person: 'mechanical', say: '你好，有什么可以帮到你呢？' },
            ],
            contentVal: '',
        };
    },
    methods: {
        getQuestion() {
            if (this.contentVal == '') {
                this.$message.error('请输入内容');
                return;
            }
            this.talkList.push({ id: Date.now(), person: 'admin', say: this.contentVal });
            this.getAnswer(this.contentVal); // 传递当前消息到 getAnswer
            this.contentVal = ''; // 清空输入栏数据
        },
        async getAnswer(message) {
            try {
                const newMessage = { id: Date.now(), person: 'mechanical', say: '' };
                this.talkList.push(newMessage);

                // 发起流式请求到正确的后端接口
                const response = await fetch('http://localhost:8888/chat/stream?userMessage=' + encodeURIComponent(message), {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // 处理流式数据
                const reader = response.body.getReader();
                let decoder = new TextDecoder('utf-8');
                let result;
                while (!(result = await reader.read()).done) {
                    const chunk = decoder.decode(result.value, { stream: true });
                    newMessage.say += chunk;
                    this.$set(this.talkList, this.talkList.length - 1, Object.assign({}, newMessage));
                }
            } catch (error) {
                console.error('Error fetching answer:', error);
                this.$message.error('获取数据失败');
            }
        }
    },
};
</script>
  
<style lang="scss" scoped>
@import '../assets/css/chat.scss';
</style>
