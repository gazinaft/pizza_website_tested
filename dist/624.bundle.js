(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[624,879],{624:(e,n,a)=>{"use strict";a.r(n);var i=a(879);describe("Order Done Page",(()=>{it("Regular Case",(()=>{expect((0,i.default)({email:"email",phone:"1",name:"name",address:"address",time:"time",payment:"cash",order:{pizza_salmon:2,pizza_pepperoni:1},price:765},[{id:"pizza_salmon",productName:"Pizza Salmon Filadelphia",productDescription:"The classic pizza, just mozarella, sauce and dough",price:300,images:["salmon"],weight:250,relatedProductIds:[7,12,15],categoryId:2},{id:"pizza_pepperoni",productName:"Pizza Pepperoni",productDescription:"The classic pizza, with thin slices of pepperoni",price:165,images:["pepperoni"],weight:250,relatedProductIds:[7,12,15],categoryId:1}])).toEqual('<div class="container" max-width="600px">\n    <h1>Delivery details</h1>\n    <p>\n      Email: <b>email</b> <br>\n      Phone number: 1 <br>\n      Name: name <br>\n      Address: address <br>\n      Time: time <br>\n      Payment: cash <br>\n    </p>\n\n    <hr>\n\n    <h1>Order</h1>\n\nPizza Salmon Filadelphia\n      <h5 style="text-align: left">2 for 600</h5>\n\nPizza Pepperoni\n      <h5 style="text-align: left">1 for 165</h5>\n\n    <hr>\n\n    <p class="lead">Total: 765</p>\n  </div>')}))}))},879:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>i});const i=(e,n)=>`<div class="container" max-width="600px">\n    <h1>Delivery details</h1>\n    <p>\n      Email: <b>${e.email}</b> <br>\n      Phone number: ${e.phone} <br>\n      Name: ${e.name} <br>\n      Address: ${e.address} <br>\n      Time: ${e.time} <br>\n      Payment: ${e.payment} <br>\n    </p>\n\n    <hr>\n\n    <h1>Order</h1>\n${Object.keys(e.order).map((a=>{const i=n.find((e=>e.id===a)),r=e.order[a];return`\n${i.productName}\n      <h5 style="text-align: left">${r} for ${r*i.price}</h5>`})).join("\n")}\n\n    <hr>\n\n    <p class="lead">Total: ${e.price}</p>\n  </div>`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9fX3Rlc3RzX18vb3JkZXJEb25lLnRlc3QuanMiLCJ3ZWJwYWNrOi8vbXktcGl6emEtd2Vic2l0ZS10ZXN0ZWQvLi9zcmMvdmlld3Mvb3JkZXJEb25lLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJlbWFpbCIsInBob25lIiwibmFtZSIsImFkZHJlc3MiLCJ0aW1lIiwicGF5bWVudCIsIm9yZGVyIiwicHJpY2UiLCJ0b0VxdWFsIiwiZGF0YSIsImRiIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInByb2R1Y3QiLCJmaW5kIiwieCIsImlkIiwicXVhbnRpdHkiLCJwcm9kdWN0TmFtZSIsImpvaW4iXSwibWFwcGluZ3MiOiJ3SkFJQUEsU0FBUyxtQkFBbUIsS0FFMUJDLEdBQUcsZ0JBQWdCLEtBMERqQkMsUUFBTyxhQXhETSxDQUNYQyxNQUFPLFFBQ1BDLE1BQU8sSUFDUEMsS0FBTSxPQUNOQyxRQUFTLFVBQ1RDLEtBQU0sT0FDTkMsUUFBUyxPQUNUQyxNQUFPLENBQUMsYUFBZ0IsRUFBRyxnQkFBbUIsR0FDOUNDLE1BQU8sS0FFRSxDQUFDLENBQ1YsR0FBTSxlQUNOLFlBQWUsMkJBQ2YsbUJBQXNCLHFEQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLFVBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxJQUMzQixXQUFjLEdBQ2IsQ0FDRCxHQUFNLGtCQUNOLFlBQWUsa0JBQ2YsbUJBQXNCLG1EQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLGFBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxJQUMzQixXQUFjLE1BNkJVQyxRQTFCZCwwZix5REN0Q2hCLE1BOEJBLEVBOUJnQixDQUFDQyxFQUFNQyxJQUVkLHNHQUdTRCxFQUFLVCx1Q0FDRFMsRUFBS1IsMkJBQ2JRLEVBQUtQLDZCQUNGTyxFQUFLTiw2QkFDUk0sRUFBS0wsNkJBQ0ZLLEVBQUtKLDZEQU1wQk0sT0FBT0MsS0FBS0gsRUFBS0gsT0FBT08sS0FBS0MsSUFDM0IsTUFBTUMsRUFBVUwsRUFBR00sTUFBS0MsR0FBS0EsRUFBRUMsS0FBT0osSUFDaENLLEVBQVdWLEVBQUtILE1BQU1RLEdBQzVCLE1BQU8sS0FDVEMsRUFBUUssbURBQzJCRCxTQUFnQkEsRUFBV0osRUFBUVIsZ0JBQ25FYyxLQUFLLG1EQUttQlosRUFBS0YiLCJmaWxlIjoiNjI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgamVzdCAqL1xuXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuLi9vcmRlckRvbmUuanMnO1xuXG5kZXNjcmliZSgnT3JkZXIgRG9uZSBQYWdlJywgKCkgPT4ge1xuXG4gIGl0KCdSZWd1bGFyIENhc2UnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWw6ICdlbWFpbCcsXG4gICAgICBwaG9uZTogJzEnLFxuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgYWRkcmVzczogJ2FkZHJlc3MnLFxuICAgICAgdGltZTogJ3RpbWUnLFxuICAgICAgcGF5bWVudDogJ2Nhc2gnLFxuICAgICAgb3JkZXI6IHsncGl6emFfc2FsbW9uJzogMiwgJ3BpenphX3BlcHBlcm9uaSc6IDF9LFxuICAgICAgcHJpY2U6IDc2NVxuICAgIH07XG4gICAgY29uc3QgZGIgPSBbe1xuICAgICAgJ2lkJzogJ3BpenphX3NhbG1vbicsXG4gICAgICAncHJvZHVjdE5hbWUnOiAnUGl6emEgU2FsbW9uIEZpbGFkZWxwaGlhJyxcbiAgICAgICdwcm9kdWN0RGVzY3JpcHRpb24nOiAnVGhlIGNsYXNzaWMgcGl6emEsIGp1c3QgbW96YXJlbGxhLCBzYXVjZSBhbmQgZG91Z2gnLFxuICAgICAgJ3ByaWNlJzogMzAwLFxuICAgICAgJ2ltYWdlcyc6IFsnc2FsbW9uJ10sXG4gICAgICAnd2VpZ2h0JzogMjUwLFxuICAgICAgJ3JlbGF0ZWRQcm9kdWN0SWRzJzogWzcsMTIsMTVdLFxuICAgICAgJ2NhdGVnb3J5SWQnOiAyXG4gICAgfSwge1xuICAgICAgJ2lkJzogJ3BpenphX3BlcHBlcm9uaScsXG4gICAgICAncHJvZHVjdE5hbWUnOiAnUGl6emEgUGVwcGVyb25pJyxcbiAgICAgICdwcm9kdWN0RGVzY3JpcHRpb24nOiAnVGhlIGNsYXNzaWMgcGl6emEsIHdpdGggdGhpbiBzbGljZXMgb2YgcGVwcGVyb25pJyxcbiAgICAgICdwcmljZSc6IDE2NSxcbiAgICAgICdpbWFnZXMnOiBbJ3BlcHBlcm9uaSddLFxuICAgICAgJ3dlaWdodCc6IDI1MCxcbiAgICAgICdyZWxhdGVkUHJvZHVjdElkcyc6IFs3LDEyLDE1XSxcbiAgICAgICdjYXRlZ29yeUlkJzogMVxuICAgIH1dO1xuXG4gICAgY29uc3QgcmVzID0gYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBtYXgtd2lkdGg9XCI2MDBweFwiPlxuICAgIDxoMT5EZWxpdmVyeSBkZXRhaWxzPC9oMT5cbiAgICA8cD5cbiAgICAgIEVtYWlsOiA8Yj5lbWFpbDwvYj4gPGJyPlxuICAgICAgUGhvbmUgbnVtYmVyOiAxIDxicj5cbiAgICAgIE5hbWU6IG5hbWUgPGJyPlxuICAgICAgQWRkcmVzczogYWRkcmVzcyA8YnI+XG4gICAgICBUaW1lOiB0aW1lIDxicj5cbiAgICAgIFBheW1lbnQ6IGNhc2ggPGJyPlxuICAgIDwvcD5cblxuICAgIDxocj5cblxuICAgIDxoMT5PcmRlcjwvaDE+XG5cblBpenphIFNhbG1vbiBGaWxhZGVscGhpYVxuICAgICAgPGg1IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPjIgZm9yIDYwMDwvaDU+XG5cblBpenphIFBlcHBlcm9uaVxuICAgICAgPGg1IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPjEgZm9yIDE2NTwvaDU+XG5cbiAgICA8aHI+XG5cbiAgICA8cCBjbGFzcz1cImxlYWRcIj5Ub3RhbDogNzY1PC9wPlxuICA8L2Rpdj5gO1xuXG4gICAgZXhwZWN0KGRpc3BsYXkoZGF0YSwgZGIpKS50b0VxdWFsKHJlcyk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBkaXNwbGF5ID0gKGRhdGEsIGRiKSA9PiB7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgbWF4LXdpZHRoPVwiNjAwcHhcIj5cbiAgICA8aDE+RGVsaXZlcnkgZGV0YWlsczwvaDE+XG4gICAgPHA+XG4gICAgICBFbWFpbDogPGI+JHtkYXRhLmVtYWlsfTwvYj4gPGJyPlxuICAgICAgUGhvbmUgbnVtYmVyOiAke2RhdGEucGhvbmV9IDxicj5cbiAgICAgIE5hbWU6ICR7ZGF0YS5uYW1lfSA8YnI+XG4gICAgICBBZGRyZXNzOiAke2RhdGEuYWRkcmVzc30gPGJyPlxuICAgICAgVGltZTogJHtkYXRhLnRpbWV9IDxicj5cbiAgICAgIFBheW1lbnQ6ICR7ZGF0YS5wYXltZW50fSA8YnI+XG4gICAgPC9wPlxuXG4gICAgPGhyPlxuXG4gICAgPGgxPk9yZGVyPC9oMT5cbiR7T2JqZWN0LmtleXMoZGF0YS5vcmRlcikubWFwKChrZXkpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gZGIuZmluZCh4ID0+IHguaWQgPT09IGtleSk7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBkYXRhLm9yZGVyW2tleV07XG4gICAgcmV0dXJuIGBcbiR7cHJvZHVjdC5wcm9kdWN0TmFtZX1cbiAgICAgIDxoNSBzdHlsZT1cInRleHQtYWxpZ246IGxlZnRcIj4ke3F1YW50aXR5fSBmb3IgJHtxdWFudGl0eSAqIHByb2R1Y3QucHJpY2V9PC9oNT5gO1xuICB9KS5qb2luKCdcXG4nKVxufVxuXG4gICAgPGhyPlxuXG4gICAgPHAgY2xhc3M9XCJsZWFkXCI+VG90YWw6ICR7ZGF0YS5wcmljZX08L3A+XG4gIDwvZGl2PmA7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiXSwic291cmNlUm9vdCI6IiJ9