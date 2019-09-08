/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:55:16
 * @LastEditTime: 2019-09-04 16:15:51
 * @LastEditors: Please set LastEditors
 */
//state是仓库的数据
// mutations 同步修改state的数据
export const state = {
	userInfo: {
		token: '',
		user: {}
	}
}

export const mutations = {
	// 设置用户信息,mutations下的方法第一个参数固定是state
	// data参数不是必须的,是调用方法时传入的参数
	setUserInfo(state, data) {
		// data是后台返回的用户信息
		state.userInfo = data;
	},
	// 清空userInfo 
	clearUserInfo(state) {
		state.userInfo = {
			token: "",
			user: {}
		}
	}
}