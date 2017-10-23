define(function (require) {

    var Vue = require('elgg/Vue');
    var moment = require('moment');

    var template = require('text!elgg/time.vue.html');

    Vue.component('elgg-time', {
        template: template,
        props: {
            timestamp: {
                type: Number,
                required: true
            },
            format: {
                type: String,
                default: 'friendly'
            },
            icon: {
                type: String
            }
        },
        data: function () {
            return {
                now: moment()
            }
        },
        ready: function() {
            var self = this;
            setTimeout(function() {
                self.now = moment();
            }, 1000);
        },
        computed: {
            displayTime: function() {
                return moment.unix(this.timestamp).format('dddd, MMMM Do YYYY, H:mm z');
            },
            formattedTime: function() {
                switch (this.format) {
                    case 'friendly' :
                        return moment.unix(this.timestamp).fromNow();

                    case 'calendar' :
                        return moment.unix(this.timestamp).calendar();

                    default :
                        return moment.unix(this.timestamp).format(this.format);
                }
            }
        }
    });

});
