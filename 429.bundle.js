(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[429],{429:(t,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>a});const a=t=>null===t||0===Object.entries(t).length?"":`\n  <div class="container" style="height: 30vw; overflow: hidden; min-height: 270px">\n  <div class="pic-ctn">${t.slider.map((t=>`\n    <img src="./img/${t.images}.jpg" alt="" id="action/${t.id}" class="hashbtn pic">`)).join("")}\n  </div>\n  </div>${t.categories.map(((s,i)=>`\n  <div style="height: 50px"></div>\n  <a href="#catalog/${s.id}"><h1>${s.name}</h1></a>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    ${t.products.filter((t=>t.categoryId===i)).map((t=>`<div class="card" style="min-width: 90px">\n      <img class="card-img-top" src="./img/${t.images}.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/${t.id}"><h5 class="card-title">${t.productName}</h5></a>\n        <h6><strong>${t.price}</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="${t.id}">Add to cart</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>\n  `)).join("\n")}</div>`)).join("\n")}`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9tYWluUGFnZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsInNsaWRlciIsIm1hcCIsInNsaWRlIiwiaW1hZ2VzIiwiaWQiLCJqb2luIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiaW5kZXgiLCJuYW1lIiwicHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnlJZCIsInByb2R1Y3ROYW1lIiwicHJpY2UiXSwibWFwcGluZ3MiOiI4SkFBQSxNQTBCQSxFQTFCaUJBLEdBQ0YsT0FBVEEsR0FBaUQsSUFBaENDLE9BQU9DLFFBQVFGLEdBQU1HLE9BQXFCLEdBQ3hELGlIQUVnQkgsRUFBS0ksT0FBT0MsS0FBSUMsR0FBUyx5QkFDNUJBLEVBQU1DLGlDQUFpQ0QsRUFBTUUsNkJBQTRCQyxLQUFLLDBCQUUxRlQsRUFBS1UsV0FBV0wsS0FBSSxDQUFDTSxFQUFVQyxJQUFVLDZEQUU3QkQsRUFBU0gsV0FBV0csRUFBU0UscUlBRTdDYixFQUFLYyxTQUFTQyxRQUFPQyxHQUFXQSxFQUFRQyxhQUFlTCxJQUFPUCxLQUFJVyxHQUNwRSwwRkFDeUNBLEVBQVFULCtGQUV6QlMsRUFBUVIsOEJBQThCUSxFQUFRRSw2Q0FDcERGLEVBQVFHLDhGQUNzQ0gsRUFBUVIsNktBTXZFQyxLQUFLLGdCQUFlQSxLQUFLIiwiZmlsZSI6IjQyOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkaXNwbGF5ID0gKGRhdGEpID0+IHtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCBPYmplY3QuZW50cmllcyhkYXRhKS5sZW5ndGggPT09IDApIHJldHVybiAnJztcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMzB2dzsgb3ZlcmZsb3c6IGhpZGRlbjsgbWluLWhlaWdodDogMjcwcHhcIj5cclxuICA8ZGl2IGNsYXNzPVwicGljLWN0blwiPiR7ZGF0YS5zbGlkZXIubWFwKHNsaWRlID0+IGBcclxuICAgIDxpbWcgc3JjPVwiLi9pbWcvJHtzbGlkZS5pbWFnZXN9LmpwZ1wiIGFsdD1cIlwiIGlkPVwiYWN0aW9uLyR7c2xpZGUuaWR9XCIgY2xhc3M9XCJoYXNoYnRuIHBpY1wiPmApLmpvaW4oJycpfVxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PiR7ZGF0YS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiBgXHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogNTBweFwiPjwvZGl2PlxyXG4gIDxhIGhyZWY9XCIjY2F0YWxvZy8ke2NhdGVnb3J5LmlkfVwiPjxoMT4ke2NhdGVnb3J5Lm5hbWV9PC9oMT48L2E+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLXNtLTIgcm93LWNvbHMtbWQtMyByb3ctY29scy1sZy00IHJvdy1jb2xzLXhsLTUgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCVcIj5cclxuICAgICR7ZGF0YS5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5SWQgPT09IGluZGV4KS5tYXAocHJvZHVjdCA9PlxyXG4gICAgYDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJtaW4td2lkdGg6IDkwcHhcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi4vaW1nLyR7cHJvZHVjdC5pbWFnZXN9LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3QvJHtwcm9kdWN0LmlkfVwiPjxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9oNT48L2E+XHJcbiAgICAgICAgPGg2PjxzdHJvbmc+JHtwcm9kdWN0LnByaWNlfTwvc3Ryb25nPiB1YWg8L2g2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FydGJ0biBidG4gYnRuLXByaW1hcnlcIiBpZD1cIiR7cHJvZHVjdC5pZH1cIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgKS5qb2luKCdcXG4nKX08L2Rpdj5gKS5qb2luKCdcXG4nKX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiXSwic291cmNlUm9vdCI6IiJ9