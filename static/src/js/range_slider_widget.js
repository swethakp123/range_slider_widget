/** @odoo-module **/
import AbstractField from 'web.AbstractField';
import fieldRegistry from 'web.field_registry';
const { useRef } = owl.hooks;
const { useState, onMounted, onWillUnmount } = owl.hooks;

var ProgressBarWidget = AbstractField.extend({
    template: "ProgressBarWidget",
    events: {
        "change input": "onChange"
    },
    onChange: function(ev){
        this.value = ev.target.value
        console.log(this.value)
        this._setValue(this.value)
    },
    start: function(){
        this._super.apply(this, arguments);

          if (this.recordData[this.name]){
                this.value = this.recordData[this.name]
          }
    },

    _render() {
        var self = this;
        var value = this.value;
        console.log("value", value)
        var max_value = 100;
        value = value || 0;
        var widthComplete;
        if (value <= max_value){
            widthComplete = parseInt(value/max_value * 100);
        }
        else{
            widthComplete = 100;
        }
        this.$('.rangeValue').val(widthComplete.toString() + '%');
        this.$('.inputSlider').val(widthComplete);
        },
    })
fieldRegistry.add('progress_bar_widget', ProgressBarWidget);
