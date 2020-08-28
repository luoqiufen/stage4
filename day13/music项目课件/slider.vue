<template>
  <div class="slider">
    <div class="slider-group">
      <div class='slider-item'>
        <img>
      </div> 
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/variable.styl';

.slider {
  min-height: 1px;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>