(self.webpackChunkmy_pizza_website_tested=self.webpackChunkmy_pizza_website_tested||[]).push([[624,879],{624:(e,n,a)=>{"use strict";a.r(n);var i=a(879);describe("Order Done Page",(()=>{it("Regular Case",(()=>{expect((0,i.default)({email:"email",phone:"1",name:"name",address:"address",time:"time",payment:"cash",order:{pizza_salmon:2,pizza_pepperoni:1},price:765},[{id:"pizza_salmon",productName:"Pizza Salmon Filadelphia",productDescription:"The classic pizza, just mozarella, sauce and dough",price:300,images:["salmon"],weight:250,relatedProductIds:[7,12,15],categoryId:2},{id:"pizza_pepperoni",productName:"Pizza Pepperoni",productDescription:"The classic pizza, with thin slices of pepperoni",price:165,images:["pepperoni"],weight:250,relatedProductIds:[7,12,15],categoryId:1}])).toEqual('<div class="container" max-width="600px">\n    <h1>Delivery details</h1>\n    <p>\n      Email: <b>email</b> <br>\n      Phone number: 1 <br>\n      Name: name <br>\n      Address: address <br>\n      Time: time <br>\n      Payment: cash <br>\n    </p>\n\n    <hr>\n\n    <h1>Order</h1>\n\nPizza Salmon Filadelphia\n      <h5 style="text-align: left">2 for 600</h5>\n\nPizza Pepperoni\n      <h5 style="text-align: left">1 for 165</h5>\n\n    <hr>\n\n    <p class="lead">Total: 765</p>\n  </div>')}))}))},879:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>i});const i=(e,n)=>`<div class="container" max-width="600px">\n    <h1>Delivery details</h1>\n    <p>\n      Email: <b>${e.email}</b> <br>\n      Phone number: ${e.phone} <br>\n      Name: ${e.name} <br>\n      Address: ${e.address} <br>\n      Time: ${e.time} <br>\n      Payment: ${e.payment} <br>\n    </p>\n\n    <hr>\n\n    <h1>Order</h1>\n${Object.keys(e.order).map((a=>{const i=n.find((e=>e.id===a)),r=e.order[a];return`\n${i.productName}\n      <h5 style="text-align: left">${r} for ${r*i.price}</h5>`})).join("\n")}\n\n    <hr>\n\n    <p class="lead">Total: ${e.price}</p>\n  </div>`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1waXp6YS13ZWJzaXRlLXRlc3RlZC8uL3NyYy92aWV3cy9fX3Rlc3RzX18vb3JkZXJEb25lLnRlc3QuanMiLCJ3ZWJwYWNrOi8vbXktcGl6emEtd2Vic2l0ZS10ZXN0ZWQvLi9zcmMvdmlld3Mvb3JkZXJEb25lLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJlbWFpbCIsInBob25lIiwibmFtZSIsImFkZHJlc3MiLCJ0aW1lIiwicGF5bWVudCIsIm9yZGVyIiwicHJpY2UiLCJ0b0VxdWFsIiwiZGF0YSIsImRiIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInByb2R1Y3QiLCJmaW5kIiwieCIsImlkIiwicXVhbnRpdHkiLCJwcm9kdWN0TmFtZSIsImpvaW4iXSwibWFwcGluZ3MiOiJ3SkFJQUEsU0FBUyxtQkFBbUIsS0FFMUJDLEdBQUcsZ0JBQWdCLEtBMERqQkMsUUFBTyxhQXhETSxDQUNYQyxNQUFPLFFBQ1BDLE1BQU8sSUFDUEMsS0FBTSxPQUNOQyxRQUFTLFVBQ1RDLEtBQU0sT0FDTkMsUUFBUyxPQUNUQyxNQUFPLENBQUMsYUFBZ0IsRUFBRyxnQkFBbUIsR0FDOUNDLE1BQU8sS0FFRSxDQUFDLENBQ1YsR0FBTSxlQUNOLFlBQWUsMkJBQ2YsbUJBQXNCLHFEQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLFVBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxJQUMzQixXQUFjLEdBQ2IsQ0FDRCxHQUFNLGtCQUNOLFlBQWUsa0JBQ2YsbUJBQXNCLG1EQUN0QixNQUFTLElBQ1QsT0FBVSxDQUFDLGFBQ1gsT0FBVSxJQUNWLGtCQUFxQixDQUFDLEVBQUUsR0FBRyxJQUMzQixXQUFjLE1BNkJVQyxRQTFCZCwwZix5REN0Q2hCLE1BOEJBLEVBOUJnQixDQUFDQyxFQUFNQyxJQUVkLHNHQUdTRCxFQUFLVCx1Q0FDRFMsRUFBS1IsMkJBQ2JRLEVBQUtQLDZCQUNGTyxFQUFLTiw2QkFDUk0sRUFBS0wsNkJBQ0ZLLEVBQUtKLDZEQU1wQk0sT0FBT0MsS0FBS0gsRUFBS0gsT0FBT08sS0FBS0MsSUFDM0IsTUFBTUMsRUFBVUwsRUFBR00sTUFBS0MsR0FBS0EsRUFBRUMsS0FBT0osSUFDaENLLEVBQVdWLEVBQUtILE1BQU1RLEdBQzVCLE1BQU8sS0FDVEMsRUFBUUssbURBQzJCRCxTQUFnQkEsRUFBV0osRUFBUVIsZ0JBQ25FYyxLQUFLLG1EQUttQlosRUFBS0YiLCJmaWxlIjoiNjI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgamVzdCAqL1xyXG5cclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi4vb3JkZXJEb25lLmpzJztcclxuXHJcbmRlc2NyaWJlKCdPcmRlciBEb25lIFBhZ2UnLCAoKSA9PiB7XHJcblxyXG4gIGl0KCdSZWd1bGFyIENhc2UnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZW1haWw6ICdlbWFpbCcsXHJcbiAgICAgIHBob25lOiAnMScsXHJcbiAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgYWRkcmVzczogJ2FkZHJlc3MnLFxyXG4gICAgICB0aW1lOiAndGltZScsXHJcbiAgICAgIHBheW1lbnQ6ICdjYXNoJyxcclxuICAgICAgb3JkZXI6IHsncGl6emFfc2FsbW9uJzogMiwgJ3BpenphX3BlcHBlcm9uaSc6IDF9LFxyXG4gICAgICBwcmljZTogNzY1XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGIgPSBbe1xyXG4gICAgICAnaWQnOiAncGl6emFfc2FsbW9uJyxcclxuICAgICAgJ3Byb2R1Y3ROYW1lJzogJ1BpenphIFNhbG1vbiBGaWxhZGVscGhpYScsXHJcbiAgICAgICdwcm9kdWN0RGVzY3JpcHRpb24nOiAnVGhlIGNsYXNzaWMgcGl6emEsIGp1c3QgbW96YXJlbGxhLCBzYXVjZSBhbmQgZG91Z2gnLFxyXG4gICAgICAncHJpY2UnOiAzMDAsXHJcbiAgICAgICdpbWFnZXMnOiBbJ3NhbG1vbiddLFxyXG4gICAgICAnd2VpZ2h0JzogMjUwLFxyXG4gICAgICAncmVsYXRlZFByb2R1Y3RJZHMnOiBbNywxMiwxNV0sXHJcbiAgICAgICdjYXRlZ29yeUlkJzogMlxyXG4gICAgfSwge1xyXG4gICAgICAnaWQnOiAncGl6emFfcGVwcGVyb25pJyxcclxuICAgICAgJ3Byb2R1Y3ROYW1lJzogJ1BpenphIFBlcHBlcm9uaScsXHJcbiAgICAgICdwcm9kdWN0RGVzY3JpcHRpb24nOiAnVGhlIGNsYXNzaWMgcGl6emEsIHdpdGggdGhpbiBzbGljZXMgb2YgcGVwcGVyb25pJyxcclxuICAgICAgJ3ByaWNlJzogMTY1LFxyXG4gICAgICAnaW1hZ2VzJzogWydwZXBwZXJvbmknXSxcclxuICAgICAgJ3dlaWdodCc6IDI1MCxcclxuICAgICAgJ3JlbGF0ZWRQcm9kdWN0SWRzJzogWzcsMTIsMTVdLFxyXG4gICAgICAnY2F0ZWdvcnlJZCc6IDFcclxuICAgIH1dO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgbWF4LXdpZHRoPVwiNjAwcHhcIj5cclxuICAgIDxoMT5EZWxpdmVyeSBkZXRhaWxzPC9oMT5cclxuICAgIDxwPlxyXG4gICAgICBFbWFpbDogPGI+ZW1haWw8L2I+IDxicj5cclxuICAgICAgUGhvbmUgbnVtYmVyOiAxIDxicj5cclxuICAgICAgTmFtZTogbmFtZSA8YnI+XHJcbiAgICAgIEFkZHJlc3M6IGFkZHJlc3MgPGJyPlxyXG4gICAgICBUaW1lOiB0aW1lIDxicj5cclxuICAgICAgUGF5bWVudDogY2FzaCA8YnI+XHJcbiAgICA8L3A+XHJcblxyXG4gICAgPGhyPlxyXG5cclxuICAgIDxoMT5PcmRlcjwvaDE+XHJcblxyXG5QaXp6YSBTYWxtb24gRmlsYWRlbHBoaWFcclxuICAgICAgPGg1IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPjIgZm9yIDYwMDwvaDU+XHJcblxyXG5QaXp6YSBQZXBwZXJvbmlcclxuICAgICAgPGg1IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPjEgZm9yIDE2NTwvaDU+XHJcblxyXG4gICAgPGhyPlxyXG5cclxuICAgIDxwIGNsYXNzPVwibGVhZFwiPlRvdGFsOiA3NjU8L3A+XHJcbiAgPC9kaXY+YDtcclxuXHJcbiAgICBleHBlY3QoZGlzcGxheShkYXRhLCBkYikpLnRvRXF1YWwocmVzKTtcclxuICB9KTtcclxufSk7XHJcbiIsImNvbnN0IGRpc3BsYXkgPSAoZGF0YSwgZGIpID0+IHtcclxuXHJcbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgbWF4LXdpZHRoPVwiNjAwcHhcIj5cclxuICAgIDxoMT5EZWxpdmVyeSBkZXRhaWxzPC9oMT5cclxuICAgIDxwPlxyXG4gICAgICBFbWFpbDogPGI+JHtkYXRhLmVtYWlsfTwvYj4gPGJyPlxyXG4gICAgICBQaG9uZSBudW1iZXI6ICR7ZGF0YS5waG9uZX0gPGJyPlxyXG4gICAgICBOYW1lOiAke2RhdGEubmFtZX0gPGJyPlxyXG4gICAgICBBZGRyZXNzOiAke2RhdGEuYWRkcmVzc30gPGJyPlxyXG4gICAgICBUaW1lOiAke2RhdGEudGltZX0gPGJyPlxyXG4gICAgICBQYXltZW50OiAke2RhdGEucGF5bWVudH0gPGJyPlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxocj5cclxuXHJcbiAgICA8aDE+T3JkZXI8L2gxPlxyXG4ke09iamVjdC5rZXlzKGRhdGEub3JkZXIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gZGIuZmluZCh4ID0+IHguaWQgPT09IGtleSk7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IGRhdGEub3JkZXJba2V5XTtcclxuICAgIHJldHVybiBgXHJcbiR7cHJvZHVjdC5wcm9kdWN0TmFtZX1cclxuICAgICAgPGg1IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPiR7cXVhbnRpdHl9IGZvciAke3F1YW50aXR5ICogcHJvZHVjdC5wcmljZX08L2g1PmA7XHJcbiAgfSkuam9pbignXFxuJylcclxufVxyXG5cclxuICAgIDxocj5cclxuXHJcbiAgICA8cCBjbGFzcz1cImxlYWRcIj5Ub3RhbDogJHtkYXRhLnByaWNlfTwvcD5cclxuICA8L2Rpdj5gO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=