// JavaScript Document


function Animator() {

    this.element;
    this.props;
    this.duration;
    this.callBack;
    var frequency = 10;
    this.intervalId = 0;
    this.finishFlag = 0;
    var counter = 0;
    var top = 0;
    var left = 0;
    var width = 0;
    var height = 0;
    var backgroundClr = 0;
    var that = this;
    this.animate = function (el, props, duration, cb) {
        counter = 0;
        that.element = el;
        that.props = props;
        that.duration = duration;
        that.callBack = cb;
        top = that.element.offsetTop;
        left = that.element.offsetLeft;
        backgroundClr = that.element.style.background;
        //console.log("that.interval",that.intervalId);
        clearInterval(that.intervalId);
        that.intervalId = setInterval(that.move, frequency);


    }

    this.move = function () {

        counter++;


        if (that.props.top != undefined) {
            var val;

            if (top > that.props.top) {
                val = top - (top - that.props.top) / (that.duration / frequency) * counter;


            } else {


                val = top + (that.props.top - top) / (that.duration / frequency) * counter;

            }

            that.element.style.top = val + "px";
        }


        if (that.props.left != undefined) {
            var val;
            if (left > that.props.left) {
                val = left - (left - that.props.left) / (that.duration / frequency) * counter;


            } else {


                val = left + (that.props.left - left) / (that.duration / frequency) * counter;

            }


            that.element.style.left = val + "px";

        }



        if (that.props.width) {
            var val = that.props.width / (that.duration / frequency) * counter;
            that.element.style.width = val + "px";

        }

        if (that.props.height) {
            var val = that.props.height / (that.duration / frequency) * counter;
            that.element.style.height = val + "px";

        }

        if (that.props.color) {
            var colorCode = parseInt(that.props.color, 16);
            var val = colorCode / (that.duration / frequency) * counter;

            //console.log(parseInt(that.element.style.backgroundColor,10));
            that.element.style.background = "#" + val.toString(16);

        }





        if (counter >= (that.duration / frequency)) {

            clearInterval(that.intervalId);
            that.callBack(1);
        }


    }

    this.stop = function () {
        clearInterval(that.intervalId);

    }

    this.finish = function () {

        that.element.style.left = that.props.left + "px";
        that.callBack(that.finishFlag++);
        if (that.finishFlag > 1)
            that.finishFlag = 0;
        clearInterval(that.intervalId);

    }


}


