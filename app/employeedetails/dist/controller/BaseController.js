sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/Fragment"],function(e,t){"use strict";return e.extend("com.app.employeedetails.controller.BaseController",{getRouter:function(){return this.getOwnerComponent().getRouter()},loadFragment:async function(e){const r=await t.load({id:this.getView().getId(),name:`com.app.employeedetails.fragments.${e}`,controller:this});this.getView().addDependent(r);return r},createData:function(e,t,r){debugger;return new Promise((n,o)=>{e.create(r,t,{refreshAfterChange:true,success:function(e){n(e);debugger},error:function(e){o(e)}})})},deleteData:function(e,t,r){return new Promise((n,o)=>{e.remove(`${t}/${r}`,{success:function(e){n(e)},error:function(e){o(e)}})})}})});