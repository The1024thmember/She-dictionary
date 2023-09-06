// pages/dictionary/dictionary.js
Page({

  /**
   * Page initial data
   */
  data: {
    searchedData : "",
    searchedResult:  null,
    audioContext: null,
  },

  /**
   * 
   * @param {*} event 
   */
  playAudio(event) {
    console.log("event for play audio:",event);
    console.log("index:",event.currentTarget.dataset.itemIndex);
    const index = event.currentTarget.dataset.itemIndex
    if (!this.data.audioContext) {
      this.data.audioContext = wx.createInnerAudioContext();
      this.data.audioContext.src = this.data.searchedResult[index].audio;
    }
    console.log("searchedResult[index].audio:",this.data.searchedResult[index].audio);

    this.data.audioContext.play();

    this.data.audioContext.onPlay(() => {
      console.log('index %s is on playing',index);
    });

    this.data.audioContext.onEnded(() => {
      console.log('index %s is finished',index);
      // You can perform additional actions here when the audio finishes playing
    });
  },
  /**
   * On submitting a search request
   * @param {*} options 
   */
  submitSearch(event) {
    console.log('content:',event.detail.value.word);
    if(event.detail.value.word){
      this.setData({
        searchedData: event.detail.value.word,
      });
      wx.showLoading({
        title: '正在检索',
      });
      wx.cloud.callFunction({
          name: "searchWord",
          data: {
              content: event.detail.value.word
          },
          success: (res)=> {
            console.log('res:',res);
            this.setData({
              searchedResult: res.result
            });
            wx.hideLoading();
          },
          complete: (res)=>{
            wx.hideLoading();
          }
      })
    }
  },
  onTyping(event) {
    this.setData({
      searchedResult: null,
      searchedData:'',
    });
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