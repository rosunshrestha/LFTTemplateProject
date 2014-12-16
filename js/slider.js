// JavaScript Document
function Slider() {
    this.nextImgInterval = 0;
    this.prevImgInterval = 0;
    this.autoInterval = 0;
    this.slider;
    this.ul;
    this.noOfImages;
    this.imgMovFlag = 0;
    this.left = 0;
    this.animator = new Animator();
    var that = this;
    var goNext = 1;
    var finish = 1;
    var first = 0;
    this.goRight = 0;
    this.goLeft = 0;
    var leftButton;
    var rightButton;
    this.init = function (sliderContainer) {
        that.slider = sliderContainer;
        that.ul = that.slider.getElementsByTagName("ul")[0];
        that.noOfImages = that.slider.getElementsByTagName("li").length - 1;
        that.displayButtons();
        that.autoInterval = setInterval(that.autoAnimate, 3000);

    }


    this.displayButtons = function () {

        leftButton = document.createElement("button");
        leftButton.className = "left-nav";
        leftButton.onclick = that.prevImg;
        that.slider.appendChild(leftButton);

        rightButton = document.createElement("button");
        rightButton.className = "right-nav";
        rightButton.onclick = that.rightPressed;
        that.slider.appendChild(rightButton);
    }
    this.leftPressed = function () {
        clearInterval(that.autoInterval);
        that.autoInterval = setInterval(that.autoAnimate, 3500);
        that.prevImg();
    }
    this.rightPressed = function () {
        clearInterval(that.autoInterval);
        that.autoInterval = setInterval(that.autoAnimate, 3500);
        that.nextImg();
    }

    this.nextImg = function () {

        if (that.imgMovFlag < that.noOfImages) {

            if (finish == 1) {
                finish = 0;
                that.imgMovFlag++;
                that.animator.animate(that.ul, { left: (-1009 * that.imgMovFlag) }, 200, callBack);
            }

        }
        that.sliderNav();
        //that.autoInterval=setInterval(that.autoAnimate,4000);
    }

    this.prevImg = function () {


        if (that.imgMovFlag > 0) {
            if (finish == 1) {

                finish = 0;
                that.imgMovFlag--;
                that.animator.animate(that.ul, { left: (-1009 * that.imgMovFlag) }, 200, callBack);
            }

        }
        that.sliderNav();
        //that.autoInterval=setInterval(that.autoAnimate,5000);
    }

    this.sliderNav = function () {
        if (that.imgMovFlag == that.noOfImages) {
            rightButton.style.background = "url(images/slider-right-button-inactive.png) 0 0 no-repeat";
        } else {
            rightButton.style.background = "url(images/slider-right-button-active.png) 0 0 no-repeat";
        }

        if (that.imgMovFlag > 0) {
            leftButton.style.background = "url(images/slider-left-button-active.png) 0 0 no-repeat";
        } else {
            leftButton.style.background = "url(images/slider-left-button-inactive.png) 0 0 no-repeat";
        }
    }



    this.autoAnimate = function () {
        //console.log("inside auto ");

        if (goNext == 1) {
            if (that.imgMovFlag == that.noOfImages)
                goNext = 0;
            that.nextImg();

        }
        if (goNext == 0) {
            that.prevImg();
            if (that.imgMovFlag == 0)
                goNext = 1;

        }


    }

    var callBack = function (isFin) {
        finish = isFin;

    }


}



var sliderEl = document.getElementsByClassName("slider")[0];
var s = new Slider();
s.init(sliderEl);



