(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[762],{762:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});const i=(t,s)=>{const a=s.split("/").pop(),i=t.categories.find((t=>t.id===a)),e=t.categories.indexOf(i);return`\n  <div style="height: 50px"></div>\n  <h1>${i.name}</h1>\n  <h2 class="text-primary">${i.description}</h2>\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">\n    ${t.products.filter((t=>t.categoryId===e)).map((t=>`<div class="card" style="min-width: 100px">\n      <img class="card-img-top" src="./img/${t.images}.jpg" alt="Card image cap">\n      <div class="card-body">\n        <a href="#product/${t.id}"><h5 class="card-title">${t.productName}</h5></a>\n        <h6><strong>${t.price}</strong> uah</h6>\n        <button type="button" class="cartbtn btn btn-primary" id="${t.id}">Order</button>\n      </div>\n      <div class="card-footer">\n        <small class="text-muted">Last updated 3 mins ago</small>\n      </div>\n    </div>`)).join("\n")}\n  </div>`}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9jYXRhbG9nL3BhZ2UuanMiXSwibmFtZXMiOlsiZGF0YSIsImVuZHBvaW50IiwiY2F0ZWdvcnlOYW1lIiwic3BsaXQiLCJwb3AiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJmaW5kIiwiY2F0IiwiaWQiLCJpbmRleCIsImluZGV4T2YiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeUlkIiwibWFwIiwiaW1hZ2VzIiwicHJvZHVjdE5hbWUiLCJwcmljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI4SkFBQSxNQXNCQSxFQXRCZ0IsQ0FBQ0EsRUFBTUMsS0FDckIsTUFBTUMsRUFBZUQsRUFBU0UsTUFBTSxLQUFLQyxNQUNuQ0MsRUFBV0wsRUFBS00sV0FBV0MsTUFBS0MsR0FBT0EsRUFBSUMsS0FBT1AsSUFDbERRLEVBQVFWLEVBQUtNLFdBQVdLLFFBQVFOLEdBQ3RDLE1BQU8sK0NBRURBLEVBQVNPLHlDQUNZUCxFQUFTUSx3SUFFaENiLEVBQUtjLFNBQVNDLFFBQU9DLEdBQVdBLEVBQVFDLGFBQWVQLElBQU9RLEtBQUlGLEdBQVcsMkZBQ3RDQSxFQUFRRywrRkFFekJILEVBQVFQLDhCQUE4Qk8sRUFBUUksNkNBQ3BESixFQUFRSyw4RkFDc0NMLEVBQVFQLG1LQUsvRGEsS0FBSyIsImZpbGUiOiI3NjIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheSA9IChkYXRhLCBlbmRwb2ludCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGVuZHBvaW50LnNwbGl0KCcvJykucG9wKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0LmlkID09PSBjYXRlZ29yeU5hbWUpO1xyXG4gIGNvbnN0IGluZGV4ID0gZGF0YS5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBgXHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogNTBweFwiPjwvZGl2PlxyXG4gIDxoMT4ke2NhdGVnb3J5Lm5hbWV9PC9oMT5cclxuICA8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj4ke2NhdGVnb3J5LmRlc2NyaXB0aW9ufTwvaDI+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLXNtLTIgcm93LWNvbHMtbWQtMyByb3ctY29scy1sZy00IHJvdy1jb2xzLXhsLTUgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCVcIj5cclxuICAgICR7ZGF0YS5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5SWQgPT09IGluZGV4KS5tYXAocHJvZHVjdCA9PiBgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHhcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi4vaW1nLyR7cHJvZHVjdC5pbWFnZXN9LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3QvJHtwcm9kdWN0LmlkfVwiPjxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9oNT48L2E+XHJcbiAgICAgICAgPGg2PjxzdHJvbmc+JHtwcm9kdWN0LnByaWNlfTwvc3Ryb25nPiB1YWg8L2g2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FydGJ0biBidG4gYnRuLXByaW1hcnlcIiBpZD1cIiR7cHJvZHVjdC5pZH1cIj5PcmRlcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gKS5qb2luKCdcXG4nKX1cclxuICA8L2Rpdj5gO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9