(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-143984d1"],{"3f6b":function(e,t,s){"use strict";s("e193")},bb51:function(e,t,s){"use strict";s.r(t);var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("h2",{staticClass:"home__title"},[e._v("Selected matches")]),s("div",{staticClass:"home__content"},[s("div",{staticClass:"home__current match"},[e._m(0),s("div",{staticClass:"match__content"},[s("div",{staticClass:"match__team match__team_home"},[s("div",{staticClass:"match__name"},[e._v(" "+e._s(e.selected_matches[0].team.home)+" ")]),e._m(1),s("div",{staticClass:"match__score"},[e._v(" "+e._s(e.selected_matches[0].scores.home)+" ")])]),s("span",[e._v(":")]),s("div",{staticClass:"match__team match__team_away"},[s("div",{staticClass:"match__score"},[e._v(" "+e._s(e.selected_matches[0].scores.away)+" ")]),e._m(2),s("div",{staticClass:"match__name"},[e._v(" "+e._s(e.selected_matches[0].team.away)+" ")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.more,expression:"more"}],staticClass:"home__more selected"},[e.selected_matches.length<2?s("div",{staticClass:"selected__text selected__text_default"},[e._v(" no previous matches ")]):e._l(e.showSelected,(function(t){return s("div",{key:t.id,staticClass:"selected__item",on:{click:function(s){return e.newCurrentMatch(t.id)}}},[s("div",{staticClass:"selected__icon"}),s("div",{staticClass:"selected__block"},[s("div",{staticClass:"selected__info"},[s("div",{staticClass:"selected__title"},[e._v(" "+e._s(t.team.home)+" - "+e._s(t.team.away)+" ")]),s("div",{staticClass:"selected__score"},[e._v(" "+e._s(t.scores.home)+" : "+e._s(t.scores.away)+" ")])]),s("div",{staticClass:"selected__text"},[e._v("3 minutes ago")])]),s("div",{staticClass:"selected__text selected__text_ml"},[e._v("11`")])])})),s("div",{staticClass:"home__btn",on:{click:e.goToAll}},[e._v("all matches")])],2),s("div",{staticClass:"home__icon-more",class:{"home__icon-more_reverse":e.more},on:{click:function(t){e.more=!e.more}}})])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"match__header"},[s("div",{staticClass:"match__time"},[s("div",{staticClass:"match__time-icon"}),s("div",{staticClass:"match__text"},[e._v("90 mins")])]),s("div",{staticClass:"match__text match__current-time"},[e._v("70:10")]),s("div",{staticClass:"match__text"},[e._v("2nd Half")])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"match__logo"},[c("img",{attrs:{src:s("cf05"),alt:"logo"}})])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"match__logo"},[c("img",{attrs:{src:s("cf05"),alt:"logo"}})])}],_={name:"Home",data(){return{more:!1,selected_matches:null}},computed:{showSelected(){return console.log(this.selected_matches.length,this.selected_matches.length<3),this.selected_matches.length<3?[this.selected_matches[1]]:this.selected_matches.slice(1,3)}},created(){this.$store.getters.selected_matches&&this.$store.commit("addSelectedMatches",1),this.selected_matches=this.$store.getters.selected_matches,console.log("created",this.selected_matches)},methods:{newCurrentMatch(e){this.$store.commit("updateSelectedMatches",e),this.selected_matches=this.$store.getters.selected_matches},goToAll(){this.$router.push("/all")}}},i=_,l=(s("3f6b"),s("2877")),m=Object(l["a"])(i,c,a,!1,null,"24bb79dc",null);t["default"]=m.exports},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},e193:function(e,t,s){}}]);
//# sourceMappingURL=chunk-143984d1.c6839bf6.js.map