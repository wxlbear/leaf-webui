<template>
  <div class="picture-pane">
    <div class="picture-item"
         v-for="image in images"
         v-bind:key="image.id">
      <img v-bind:src="image.url" />

    </div>
  </div>
</template>

<script>
import { get } from "../utils/request.js";

export default {
  name: "Picture",
  props: {
    msg: String
  },
  data: function() {
    return {
      images: []
    };
  },
  mounted: function() {
    console.log("mounted");
    get("/pictures/pager", {}, list => {
      var records = list.records;
      records = [
        {
          id: 1,
          url:
            "https://bear-picture.oss-cn-beijing.aliyuncs.com/life/WechatIMG1.jpeg?Expires=1555854709&OSSAccessKeyId=TMP.AgHJPwQHYrj382sffte5Tol7BgDxi0hiHqMkr9NNQ7Pm0Teu3cEZ0HFxr9k5AAAwLAIUEY6eclRYT8_XXy-_DBohd-_kyyUCFDvyla-_uMKzOzE4Xdmo6c2cW34r&Signature=%2FSvLt9CE6IoT%2FpHD6j9%2FugLh1OM%3D"
        },
        {
          id: 2,
          url:
            "https://bear-picture.oss-cn-beijing.aliyuncs.com/life/psb%20%281%29.jpeg?Expires=1555854747&OSSAccessKeyId=TMP.AgHJPwQHYrj382sffte5Tol7BgDxi0hiHqMkr9NNQ7Pm0Teu3cEZ0HFxr9k5AAAwLAIUEY6eclRYT8_XXy-_DBohd-_kyyUCFDvyla-_uMKzOzE4Xdmo6c2cW34r&Signature=Ui1dO3f8cQ4ONKxjY%2BTRTbYCC3o%3D"
        }
      ];
      this.images = records.map(item => {
        return {
          url: item.url,
          id: item.id
        };
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
