(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[716,87],{716:(e,a,t)=>{"use strict";t.r(a);var s=t(87);describe("Catalog Page",(()=>{it("Regular Case",(()=>{expect((0,s.default)({products:[{id:"pizza_five_cheese",productName:"Pizza Five Cheese",productDescription:"The most cheesy pizza you ever tasted",price:175,images:["five_cheese"],weight:250,relatedProductIds:[7,12,2],categoryId:0}],categories:[{id:"vegetarian",name:"Vegetarian",description:"Pizza with no meat. If you are vegan, or just prefer pizza without meat, this is for you."}]})).toEqual('\n  <div style="height: 50px"></div>\n  <a href="#catalog/vegetarian"><h1>Vegetarian</h1></a>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    <div class="card" style="min-width: 100px">\n      <img class="card-img-top" src="./img/five_cheese.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/pizza_five_cheese"><h5 class="card-title">Pizza Five Cheese</h5></a>\n        <h6><strong>175</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="pizza_five_cheese">Add to cart</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>\n  </div>')}))}))},87:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});const s=e=>`${e.categories.map(((a,t)=>`\n  <div style="height: 50px"></div>\n  <a href="#catalog/${a.id}"><h1>${a.name}</h1></a>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    ${e.products.filter((e=>e.categoryId===t)).map((e=>`<div class="card" style="min-width: 100px">\n      <img class="card-img-top" src="./img/${e.images}.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/${e.id}"><h5 class="card-title">${e.productName}</h5></a>\n        <h6><strong>${e.price}</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="${e.id}">Add to cart</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>`)).join("\n")}\n  </div>`)).join("\n")}`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9fX3Rlc3RzX18vY2F0YWxvZy50ZXN0LmpzIiwid2VicGFjazovL215LXBpenphLXdlYnNpdGUtdGVzdGVkLy4vc3JjL3ZpZXdzL2NhdGFsb2cuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInByb2R1Y3RzIiwidG9FcXVhbCIsImRhdGEiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImlkIiwibmFtZSIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeUlkIiwiaW1hZ2VzIiwicHJvZHVjdE5hbWUiLCJwcmljZSIsImpvaW4iXSwibWFwcGluZ3MiOiJzSkFJQUEsU0FBUyxnQkFBZ0IsS0FDdkJDLEdBQUcsZ0JBQWdCLEtBb0NqQkMsUUFBTyxhQW5DTSxDQUNYQyxTQUFVLENBQ1IsQ0FDRSxHQUFNLG9CQUNOLFlBQWUsb0JBQ2YsbUJBQXNCLHdDQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLGVBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxHQUMzQixXQUFjLElBR2xCLFdBQWMsQ0FBQyxDQUNiLEdBQU0sYUFDTixLQUFRLGFBQ1IsWUFBZSxpR0FtQkdDLFFBaEJQLHN3Qix3REN6Qm5CLE1Bb0JBLEVBcEJpQkMsR0FDUixHQUFHQSxFQUFLQyxXQUFXQyxLQUFJLENBQUNDLEVBQVVDLElBQ3ZDLDZEQUVrQkQsRUFBU0UsV0FBV0YsRUFBU0cscUlBRTdDTixFQUFLRixTQUFTUyxRQUFPQyxHQUFXQSxFQUFRQyxhQUFlTCxJQUFPRixLQUFJTSxHQUFXLDJGQUN0Q0EsRUFBUUUsK0ZBRXpCRixFQUFRSCw4QkFBOEJHLEVBQVFHLDZDQUNwREgsRUFBUUksOEZBQ3NDSixFQUFRSCx5S0FLL0RRLEtBQUssb0JBQ1BBLEtBQUsiLCJmaWxlIjoiNzE2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgamVzdCAqL1xyXG5cclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi4vY2F0YWxvZy5qcyc7XHJcblxyXG5kZXNjcmliZSgnQ2F0YWxvZyBQYWdlJywgKCkgPT4ge1xyXG4gIGl0KCdSZWd1bGFyIENhc2UnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICdpZCc6ICdwaXp6YV9maXZlX2NoZWVzZScsXHJcbiAgICAgICAgICAncHJvZHVjdE5hbWUnOiAnUGl6emEgRml2ZSBDaGVlc2UnLFxyXG4gICAgICAgICAgJ3Byb2R1Y3REZXNjcmlwdGlvbic6ICdUaGUgbW9zdCBjaGVlc3kgcGl6emEgeW91IGV2ZXIgdGFzdGVkJyxcclxuICAgICAgICAgICdwcmljZSc6IDE3NSxcclxuICAgICAgICAgICdpbWFnZXMnOiBbJ2ZpdmVfY2hlZXNlJ10sXHJcbiAgICAgICAgICAnd2VpZ2h0JzogMjUwLFxyXG4gICAgICAgICAgJ3JlbGF0ZWRQcm9kdWN0SWRzJzogWzcsMTIsMl0sXHJcbiAgICAgICAgICAnY2F0ZWdvcnlJZCc6IDBcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgICdjYXRlZ29yaWVzJzogW3tcclxuICAgICAgICAnaWQnOiAndmVnZXRhcmlhbicsXHJcbiAgICAgICAgJ25hbWUnOiAnVmVnZXRhcmlhbicsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1BpenphIHdpdGggbm8gbWVhdC4gSWYgeW91IGFyZSB2ZWdhbiwgb3IganVzdCBwcmVmZXIgcGl6emEgd2l0aG91dCBtZWF0LCB0aGlzIGlzIGZvciB5b3UuJ1xyXG4gICAgICB9XVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGBcclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA1MHB4XCI+PC9kaXY+XHJcbiAgPGEgaHJlZj1cIiNjYXRhbG9nL3ZlZ2V0YXJpYW5cIj48aDE+VmVnZXRhcmlhbjwvaDE+PC9hPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1zbS0yIHJvdy1jb2xzLW1kLTMgcm93LWNvbHMtbGctNCByb3ctY29scy14bC01IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi9pbWcvZml2ZV9jaGVlc2UuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdC9waXp6YV9maXZlX2NoZWVzZVwiPjxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5QaXp6YSBGaXZlIENoZWVzZTwvaDU+PC9hPlxyXG4gICAgICAgIDxoNj48c3Ryb25nPjE3NTwvc3Ryb25nPiB1YWg8L2g2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FydGJ0biBidG4gYnRuLXByaW1hcnlcIiBpZD1cInBpenphX2ZpdmVfY2hlZXNlXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIGV4cGVjdChkaXNwbGF5KGRhdGEpKS50b0VxdWFsKHJlc3VsdCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCBkaXNwbGF5ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gYCR7ZGF0YS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiBcclxuICAgIGBcclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA1MHB4XCI+PC9kaXY+XHJcbiAgPGEgaHJlZj1cIiNjYXRhbG9nLyR7Y2F0ZWdvcnkuaWR9XCI+PGgxPiR7Y2F0ZWdvcnkubmFtZX08L2gxPjwvYT5cclxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtc20tMiByb3ctY29scy1tZC0zIHJvdy1jb2xzLWxnLTQgcm93LWNvbHMteGwtNSBzdHlsZT1cIm1heC13aWR0aDogMTAwJVwiPlxyXG4gICAgJHtkYXRhLnByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuY2F0ZWdvcnlJZCA9PT0gaW5kZXgpLm1hcChwcm9kdWN0ID0+IGA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi9pbWcvJHtwcm9kdWN0LmltYWdlc30uanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdC8ke3Byb2R1Y3QuaWR9XCI+PGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7cHJvZHVjdC5wcm9kdWN0TmFtZX08L2g1PjwvYT5cclxuICAgICAgICA8aDY+PHN0cm9uZz4ke3Byb2R1Y3QucHJpY2V9PC9zdHJvbmc+IHVhaDwvaDY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJ0YnRuIGJ0biBidG4tcHJpbWFyeVwiIGlkPVwiJHtwcm9kdWN0LmlkfVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmApLmpvaW4oJ1xcbicpfVxyXG4gIDwvZGl2PmApLmpvaW4oJ1xcbicpfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=