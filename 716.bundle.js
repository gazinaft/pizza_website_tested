(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[716,87],{716:(e,a,t)=>{"use strict";t.r(a);var s=t(87);describe("Catalog Page",(()=>{it("Regular Case",(()=>{expect((0,s.default)({products:[{id:"pizza_five_cheese",productName:"Pizza Five Cheese",productDescription:"The most cheesy pizza you ever tasted",price:175,images:["five_cheese"],weight:250,relatedProductIds:[7,12,2],categoryId:0}],categories:[{id:"vegetarian",name:"Vegetarian",description:"Pizza with no meat. If you are vegan, or just prefer pizza without meat, this is for you."}]})).toEqual('\n  <div style="height: 50px"></div>\n  <a href="#catalog/vegetarian"><h1>Vegetarian</h1></a>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    <div class="card" style="min-width: 100px">\n      <img class="card-img-top" src="./img/five_cheese.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/pizza_five_cheese"><h5 class="card-title">Pizza Five Cheese</h5></a>\n        <h6><strong>175</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="pizza_five_cheese">Add to cart</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>\n  </div>')}))}))},87:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});const s=e=>`${e.categories.map(((a,t)=>`\n  <div style="height: 50px"></div>\n  <a href="#catalog/${a.id}"><h1>${a.name}</h1></a>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    ${e.products.filter((e=>e.categoryId===t)).map((e=>`<div class="card" style="min-width: 100px">\n      <img class="card-img-top" src="./img/${e.images}.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/${e.id}"><h5 class="card-title">${e.productName}</h5></a>\n        <h6><strong>${e.price}</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="${e.id}">Add to cart</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>`)).join("\n")}\n  </div>`)).join("\n")}`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9fX3Rlc3RzX18vY2F0YWxvZy50ZXN0LmpzIiwid2VicGFjazovL215LXBpenphLXdlYnNpdGUtdGVzdGVkLy4vc3JjL3ZpZXdzL2NhdGFsb2cuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInByb2R1Y3RzIiwidG9FcXVhbCIsImRhdGEiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImlkIiwibmFtZSIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeUlkIiwiaW1hZ2VzIiwicHJvZHVjdE5hbWUiLCJwcmljZSIsImpvaW4iXSwibWFwcGluZ3MiOiJzSkFJQUEsU0FBUyxnQkFBZ0IsS0FDdkJDLEdBQUcsZ0JBQWdCLEtBb0NqQkMsUUFBTyxhQW5DTSxDQUNYQyxTQUFVLENBQ1IsQ0FDRSxHQUFNLG9CQUNOLFlBQWUsb0JBQ2YsbUJBQXNCLHdDQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLGVBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxHQUMzQixXQUFjLElBR2xCLFdBQWMsQ0FBQyxDQUNiLEdBQU0sYUFDTixLQUFRLGFBQ1IsWUFBZSxpR0FtQkdDLFFBaEJQLHN3Qix3REN6Qm5CLE1Bb0JBLEVBcEJpQkMsR0FDUixHQUFHQSxFQUFLQyxXQUFXQyxLQUFJLENBQUNDLEVBQVVDLElBQ3ZDLDZEQUVrQkQsRUFBU0UsV0FBV0YsRUFBU0cscUlBRTdDTixFQUFLRixTQUFTUyxRQUFPQyxHQUFXQSxFQUFRQyxhQUFlTCxJQUFPRixLQUFJTSxHQUFXLDJGQUN0Q0EsRUFBUUUsK0ZBRXpCRixFQUFRSCw4QkFBOEJHLEVBQVFHLDZDQUNwREgsRUFBUUksOEZBQ3NDSixFQUFRSCx5S0FLL0RRLEtBQUssb0JBQ1BBLEtBQUsiLCJmaWxlIjoiNzE2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgamVzdCAqL1xuXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuLi9jYXRhbG9nLmpzJztcblxuZGVzY3JpYmUoJ0NhdGFsb2cgUGFnZScsICgpID0+IHtcbiAgaXQoJ1JlZ3VsYXIgQ2FzZScsICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6ICdwaXp6YV9maXZlX2NoZWVzZScsXG4gICAgICAgICAgJ3Byb2R1Y3ROYW1lJzogJ1BpenphIEZpdmUgQ2hlZXNlJyxcbiAgICAgICAgICAncHJvZHVjdERlc2NyaXB0aW9uJzogJ1RoZSBtb3N0IGNoZWVzeSBwaXp6YSB5b3UgZXZlciB0YXN0ZWQnLFxuICAgICAgICAgICdwcmljZSc6IDE3NSxcbiAgICAgICAgICAnaW1hZ2VzJzogWydmaXZlX2NoZWVzZSddLFxuICAgICAgICAgICd3ZWlnaHQnOiAyNTAsXG4gICAgICAgICAgJ3JlbGF0ZWRQcm9kdWN0SWRzJzogWzcsMTIsMl0sXG4gICAgICAgICAgJ2NhdGVnb3J5SWQnOiAwXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnY2F0ZWdvcmllcyc6IFt7XG4gICAgICAgICdpZCc6ICd2ZWdldGFyaWFuJyxcbiAgICAgICAgJ25hbWUnOiAnVmVnZXRhcmlhbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdQaXp6YSB3aXRoIG5vIG1lYXQuIElmIHlvdSBhcmUgdmVnYW4sIG9yIGp1c3QgcHJlZmVyIHBpenphIHdpdGhvdXQgbWVhdCwgdGhpcyBpcyBmb3IgeW91LidcbiAgICAgIH1dXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBgXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDUwcHhcIj48L2Rpdj5cbiAgPGEgaHJlZj1cIiNjYXRhbG9nL3ZlZ2V0YXJpYW5cIj48aDE+VmVnZXRhcmlhbjwvaDE+PC9hPlxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtc20tMiByb3ctY29scy1tZC0zIHJvdy1jb2xzLWxnLTQgcm93LWNvbHMteGwtNSBzdHlsZT1cIm1heC13aWR0aDogMTAwJVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi9pbWcvZml2ZV9jaGVlc2UuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0L3BpenphX2ZpdmVfY2hlZXNlXCI+PGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPlBpenphIEZpdmUgQ2hlZXNlPC9oNT48L2E+XG4gICAgICAgIDxoNj48c3Ryb25nPjE3NTwvc3Ryb25nPiB1YWg8L2g2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhcnRidG4gYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJwaXp6YV9maXZlX2NoZWVzZVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gICAgZXhwZWN0KGRpc3BsYXkoZGF0YSkpLnRvRXF1YWwocmVzdWx0KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGRpc3BsYXkgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gYCR7ZGF0YS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiBcbiAgICBgXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDUwcHhcIj48L2Rpdj5cbiAgPGEgaHJlZj1cIiNjYXRhbG9nLyR7Y2F0ZWdvcnkuaWR9XCI+PGgxPiR7Y2F0ZWdvcnkubmFtZX08L2gxPjwvYT5cbiAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLXNtLTIgcm93LWNvbHMtbWQtMyByb3ctY29scy1sZy00IHJvdy1jb2xzLXhsLTUgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCVcIj5cbiAgICAke2RhdGEucHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5jYXRlZ29yeUlkID09PSBpbmRleCkubWFwKHByb2R1Y3QgPT4gYDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi9pbWcvJHtwcm9kdWN0LmltYWdlc30uanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0LyR7cHJvZHVjdC5pZH1cIj48aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtwcm9kdWN0LnByb2R1Y3ROYW1lfTwvaDU+PC9hPlxuICAgICAgICA8aDY+PHN0cm9uZz4ke3Byb2R1Y3QucHJpY2V9PC9zdHJvbmc+IHVhaDwvaDY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FydGJ0biBidG4gYnRuLXByaW1hcnlcIiBpZD1cIiR7cHJvZHVjdC5pZH1cIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmApLmpvaW4oJ1xcbicpfVxuICA8L2Rpdj5gKS5qb2luKCdcXG4nKX1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiXSwic291cmNlUm9vdCI6IiJ9