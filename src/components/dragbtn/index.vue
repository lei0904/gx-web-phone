<template>
    <div class="drag-btn"
    @click="clickHandler"
    @touchstart="start($event)"
    @touchmove.stop.prevent="move($event)"
    @touchend.stop="end($event)">+</div>
  <!--<div class="drag-btn"
       @click.stop.prevent="clickHandler">+</div>-->
</template>

<script type="text/javascript">
    import {getStyle, debounce} from '../../utils';

    export default {
        data() {
            return {
                dragging: true,
                tempX: 0,
                tempY: 0,
                x: 0,
                y: 0                
            }
        },
        methods: {
            clickHandler() {
                this.$emit('click');
            },
            start($event) {
                this.dragging = true;
                let target = $event.target ||  $event.srcElement;
                this.tempX = getStyle(target, 'left');
                this.tempY = getStyle(target, 'top');
                this.x = $event.touches[0].pageX;
                this.y = $event.touches[0].pageY;
            },
            move($event) {
                setTimeout(()=>{
                    if (this.dragging) {                
                        let curX = this.tempX + $event.touches[0].pageX - this.x;                
                        var curY = this.tempY + $event.touches[0].pageY - this.y;                
                        //边界判断    
                        if (curX <= 0) {
                            curX = 50;
                        }     
                        if (curY <= 0) {
                            curY = 0;
                        }     
                        let target = $event.target ||  $event.srcElement;

                        let parentNode = target.parentNode;

                        let width = getStyle(parentNode, 'width') - 10;
                        let height = getStyle(parentNode, 'height') - 10;

                        if (curX > width) {
                            curX = width - 50;
                        }
                        if (curY > height) {
                            curY = height - 60;
                        }

                        
                        target.style.left = curX + 'px';
                        target.style.top = curY + 'px';
                    }         
                }, 50);
                          
            },
            end($event) {
                this.dragging = false;
            }
        }
    }
</script>

<style lang="scss">
    .drag-btn {
        position: fixed;
        bottom: 10px; /*no*/
        left: 50%;
        margin-left: -25px; /*no*/
        width: 50px; /*no*/
        height: 50px; /*no*/
        line-height: 50px; /*no*/
        z-index: 1000; 
        text-align: center;
        font-size: 100px; 
        background: rgba(49, 144, 232, .3);    
        border: 1px solid rgb(49, 144, 232); /*no*/
        border-radius: 50%;
        color: rgb(49, 144, 232);
    }
</style>
