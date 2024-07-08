import axios from "axios";
import { get, post } from "./http";


//========================>歌曲相关
//根据歌曲id查询歌曲对象
export const songOfSongId = (id) => get(`song/detail?songId=${id}`);
//根据歌手名字模糊查询歌曲
export const likeSongOfName = (keywords) =>get(`song/likeSongOfName?songName=${keywords}`);
// 下载歌曲
export const download = (url) =>
  axios({
    method: "get",
    url: url,
    responseType: "blob",
  });

//========================>歌单相关
//查询歌单id为songListId的歌曲
export const listSongDetail =(songListId)=>get(`listSong/detail?songListId=${songListId}`)
// 获取歌单类型
export const getSongListOfStyle = (style) => get(`songList/style/detail?style=${style}`)
// 返回标题包含keywords文字的歌单
export const getSongListOfLikeTitle = (keywords) => get(`songList/likeTitle/detail?title=${keywords}`)
//查询所有歌单
export const getAllSongList = () => get(`songList/allSongList`);

//========================>用户相关
//注册
export const SignUp = (params) => post(`consumer/add`, params);
//登录    code==1成功，code==0失败
export const loginIn = (params) => post(`consumer/login`, params);
// 更新用户信息
export const updateUserMsg = (params) => post(`user/update`, params);
// 返回指定ID的用户
export const getUserOfId = (id) => get(`user/detail?id=${id}`);

// =======================> 收藏 API
// 返回的指定用户ID的收藏列表
export const getCollectionOfUser = (userId) => get(`collection/detail?userId=${userId}`)
// 添加收藏的歌曲 type: 0 代表歌曲， 1 代表歌单
export const setCollection = (params) => post(`collection/add`, params)

//========================>歌手相关
//查询歌手
export const getAllSinger = () => get(`singer/allSinger`);
// 返回指定歌手ID的歌曲
export const songOfSingerId = (id) => get(`song/singer/detail?singerId=${id}`)
// 通过性别对歌手分类
export const getSingerOfSex = (sex) => get(`singer/sex/detail?sex=${sex}`)
