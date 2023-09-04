// pages/dictionary/dictionary.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * On submitting a search request
   * @param {*} options 
   */
  submitSearch(event) {
    wx.cloud.callFunction({
        name: "searchWord",
        data: {
            content: event.detail.value.content
        },
        success: (res)=> {
            wx.navigateTo({
              url: '/pages/dictionary/dictionary',
            })
        },
        complete: (res)=>{

        }
    })
    console.log("")
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})