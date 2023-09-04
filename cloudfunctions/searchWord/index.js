// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  console.warn('searchWord cloud function get called');
  console.warn('event.content:',event.content);
  try {
    const res = await db.collection('test').where({
      mandarin: event.content,
    }).get();
    console.warn("query succeeded! :)");
    console.warn(res.data);
    return res.data;
  } catch (error) {
    console.error("query failed:", error);
    throw error;
  }
}