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
    get("/pictures/pager", {}, list => {
      var records = list.records;
      records = [
        {
          id: 1,
          url:
            "https://bear-picture.oss-cn-beijing.aliyuncs.com/life/WechatIMG1.jpeg"
        },
        {
          id: 2,
          url:
            "https://bear-picture.oss-cn-beijing.aliyuncs.com/life/psb%20%281%29.jpeg"
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
