(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),c=a.n(l),i=a(33),s=a(11),o=(a(57),function(){return"https://accounts.spotify.com/authorize?".concat(u({client_id:"77edb9a2465445fc8b366da5105e7add",response_type:"token",redirect_uri:"http://localhost:3000/auth",scope:"playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private"}))}),u=function(e){return Object.keys(e).map(function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))}).join("&")},m=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-1"},"Spotify Playlist Editor"),r.a.createElement("h4",null,"Sort your playlists any way you want."),r.a.createElement("h5",null,r.a.createElement("i",{class:"fas fa-exclamation-triangle"})," Note this is still a work in progress, so use it with caution."," ",r.a.createElement("i",{class:"fas fa-exclamation-triangle"})),r.a.createElement("a",{className:"btn btn-lg btn-outline-light my-2",href:o()},"Connect to Spotify")))},p=a(14),d=a(15),b=a(17),f=a(16),h=a(18),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={token:e.history.location.hash.match("[#&]access_token=([^&]*)")[1]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){localStorage.setItem("token",this.state.token)}},{key:"render",value:function(){return this.state.token?r.a.createElement(s.a,{to:"/playlists"}):r.a.createElement(s.a,{to:"/"})}}]),t}(n.Component),g=a(2),E=(a(113),function(e){var t=e.playlistTrack.track;return r.a.createElement("li",{className:"media"},r.a.createElement("img",{className:"playlist-img mr-3",src:t.album.imageUrl,alt:t.albumName}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0 mb-1"},r.a.createElement("b",null,t.name)),r.a.createElement("p",null,t.stringArtists)))}),v=function(e){var t=e.loading,a=e.tracks;return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-3"},"Tracks"),r.a.createElement("ul",{className:"list-unstyled"},t?r.a.createElement("h4",{className:"text-center"},"A little bit of patience now..."," ",r.a.createElement("i",{className:"fas fa-circle-notch spinner"})):a.map(function(e){return r.a.createElement(E,{key:e.id,playlistTrack:e})})))},k=a(12),N=a.n(k),O=a(25),j=a(10),x=a.n(j),w=[{description:"name",attribute:"track.name"},{description:"artist name",attribute:"addedAt"},{description:"album name",attribute:"track.albumName"},{description:"length",attribute:"track.durationMs"},{description:"release date",attribute:"track.album.releaseDate"},{description:"popularity",attribute:"track.popularity"},{description:"addition date",attribute:"track.album.releaseDate"}],S=function(){var e=Object(O.a)(N.a.mark(function e(t,a,n){var r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(g.init)({token:localStorage.getItem("token")}),e.next=3,C(t,a,n);case 3:return r=e.sent,e.abrupt("return",r.reduce(function(){var e=Object(O.a)(N.a.mark(function e(a,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a;case 2:return e.abrupt("return",I(t,n));case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),Promise.resolve()));case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(N.a.mark(function e(t,a,n){var r,l,c,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.getPlaylistTracks)(t,{limit:a});case 2:return r=e.sent,l=r.items.map(function(e,t){return{index:t,attribute:x.a.get(e,n)}}),c=x.a.sortBy(l,"attribute").reverse(),i=c.map(function(e){return e.index}),e.abrupt("return",P(i));case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),P=function(e){for(var t=0;t<e.length;t++)for(var a=t+1;a<e.length;a++)e[t]>e[a]&&(e[a]+=1);return e},I=function(e,t){return Object(g.reorderPlaylistTracks)(e,t,{rangeLength:1,insertBefore:0})},T=function(e){var t=e.handleClick,a=w.map(function(e){var a=e.attribute,n=e.description;return r.a.createElement("button",{className:"text-uppercase dropdown-item",onClick:function(){return t(a)}},n)});return r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"btn btn-dark dropdown-toggle",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"SORT PLAYLIST BY"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},a))},A=(a(116),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).handleClick=function(e){var t=a.state,n=t.playlist,r=t.playlistId;a.setState({loading:!0}),S(r,n.totalTracks,e).then(function(){return Object(g.getPlaylist)(r).then(function(e){return a.setState({playlist:e,loading:!1})})})},a.state={playlist:{},playlistId:e.match.params.id,loading:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.init)({token:localStorage.getItem("token")}),Object(g.getPlaylist)(this.state.playlistId).then(function(t){return e.setState({playlist:t})})}},{key:"render",value:function(){var e=this.state,t=e.playlist,a=e.loading;return t.name?r.a.createElement("div",{className:"playlist-page container mb-4 p-4 shadow"},r.a.createElement("h1",{className:"mb-4"},t.name),r.a.createElement(T,{handleClick:this.handleClick}),r.a.createElement(v,{loading:a,tracks:t.tracks.items})):null}}]),t}(n.Component)),M=(a(117),function(e){var t=e.playlist;return r.a.createElement("div",{className:"user-playlist"},r.a.createElement("h4",null,t.name,r.a.createElement("a",{href:"/playlists/".concat(t.id),className:"badge badge-pill badge-dark mx-1"},"SORT / MANAGE")),r.a.createElement("h5",null,r.a.createElement("span",{className:"badge badge-info mr-1"},t.totalTracks," tracks"),r.a.createElement("span",{className:"badge badge-secondary"},t.collaborative?"COLLABORATIVE":t.public?"PUBLIC":"PRIVATE")),r.a.createElement("hr",{className:"my-4"}))}),L=function(e){var t=e.playlists,a=e.handleClick,n=e.hasNextPage,l=t.map(function(e){return r.a.createElement(M,{playlist:e})}),c=r.a.createElement("div",{className:"load-more-button-wrapper"},r.a.createElement("button",{className:"btn btn-dark load-more-button",onClick:a},r.a.createElement("h4",{className:"px-3 mb-0"},"LOAD MORE PLAYLISTS")));return r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-4"},"These are your playlists"),l,n&&c)},B=(a(118),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).loadMorePlaylists=function(){a.state.page.getNextPage().then(function(e){return a.setState(function(t){var a=t.playlists.concat(e.items);return{page:e,playlists:a}})})},a.state={page:{},playlists:[],user:{}},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.init)({token:localStorage.getItem("token")}),Object(g.getCurrentUserPlaylists)({limit:5}).then(function(t){return e.setState({page:t,playlists:t.items})}),Object(g.getCurrentUserProfile)().then(function(t){return e.setState({user:t})})}},{key:"render",value:function(){var e=this.state,t=e.playlists,a=e.page,n=e.user,l=t.filter(function(e){return e.owner.id===n.id});return a.items?r.a.createElement("div",{className:"user-page container mb-4 p-4 shadow"},r.a.createElement(R,{user:n}),r.a.createElement(L,{playlists:l,handleClick:this.loadMorePlaylists,hasNextPage:a.hasNext()})):null}}]),t}(n.Component)),R=function(e){var t=e.user;return r.a.createElement("div",{class:"user-page-header media p-3"},r.a.createElement("img",{src:t.images[0].url,alt:"Avatar",className:"user-image rounded-circle align-self-center"}),r.a.createElement("div",{class:"media-body align-self-center"},r.a.createElement("h1",{className:"text-center py-4 display-4"},"Welcome, ",t.displayName,"!")))},D=B,U=function(){return r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"/playlists"},"Playlists"))))},_=function(){return r.a.createElement("nav",{class:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"/"},"Spotify Playlist Editor"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement(U,null))},Y=function(){return r.a.createElement(i.a,null,r.a.createElement(_,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:m}),r.a.createElement(s.b,{exact:!0,path:"/auth",component:y}),r.a.createElement(s.b,{exact:!0,path:"/playlists",component:D}),r.a.createElement(s.b,{exact:!0,path:"/playlists/:id",component:A})))},J=(a(119),document.getElementById("root"));J&&c.a.render(r.a.createElement(Y,null),J)},52:function(e,t,a){e.exports=a(120)},57:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.0019e336.chunk.js.map