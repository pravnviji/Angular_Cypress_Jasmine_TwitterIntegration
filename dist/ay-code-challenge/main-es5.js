(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+YFA":
    /*!*****************************************************!*\
      !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
      \*****************************************************/

    /*! exports provided: ApiPrefixInterceptor */

    /***/
    function YFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function () {
        return ApiPrefixInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /**
       * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
       */


      var ApiPrefixInterceptor = /*#__PURE__*/function () {
        function ApiPrefixInterceptor() {
          _classCallCheck(this, ApiPrefixInterceptor);
        }

        _createClass(ApiPrefixInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!/^(http|https):/i.test(request.url) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
              request = request.clone({
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + request.url
              });
            }

            return next.handle(request);
          }
        }]);

        return ApiPrefixInterceptor;
      }();

      ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) {
        return new (t || ApiPrefixInterceptor)();
      };

      ApiPrefixInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiPrefixInterceptor,
        factory: ApiPrefixInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/Praveen/React Workspace/210322-ay-code-challenge/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "320Y":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.appName = 'Twitter Technical Assessment';
      };

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 3,
        vars: 1,
        consts: [[1, "header_block", "container-fluid"], ["id", "app-name"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appName);
          }
        },
        styles: ["@font-face {\n  font-family: \"Alegreya-Bold\";\n  src: local(\"Alegreya-Bold\"), url('Alegreya-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Alegreya-ExtraBold\";\n  src: local(\"Alegreya-ExtraBold\"), url('Alegreya-ExtraBold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Alegreya-Regular\";\n  src: local(\"Alegreya-Regular\"), url('Alegreya-Regular.ttf') format(\"truetype\");\n}\n.header_block[_ngcontent-%COMP%] {\n  min-height: 55px;\n  margin: -10px 0px 0px -10px;\n  background: #000 linear-gradient(-105deg, #1C9BEF 30%, #1C9BEF 80%, #081026 100%) repeat scroll 0 0;\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#081026\", endColorstr=\"#0066a1\", GradientType=1);\n  background-color: #2b86b2;\n}\n.header_block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 25px;\n  color: #fff;\n  font-family: \"Alegreya-Bold\";\n  text-align: center;\n  padding: 15px;\n}\n.header_block[_ngcontent-%COMP%]   .pageMenu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.header_block[_ngcontent-%COMP%]   .pageMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  line-height: 55px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.header_block[_ngcontent-%COMP%]   .pageMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 20px;\n  outline: 0;\n}\n.header_block[_ngcontent-%COMP%]   .pageMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #fff;\n}\n.header_block[_ngcontent-%COMP%]   .pageMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 5px solid #1569c7;\n  color: #fff;\n}\n.header_block[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.header_block[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 5px 8px;\n  padding: 0;\n  position: relative;\n  white-space: nowrap;\n  line-height: 43px;\n  float: right;\n  width: auto;\n}\n.header_block[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0Esd0VBQUE7QUFDSjtBQUNBO0VBQ0ksaUNBQUE7RUFDQSxrRkFBQTtBQUNKO0FBQ0E7RUFDSSwrQkFBQTtFQUNBLDhFQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtR0FBQTtFQUFtRyxtSEFBQTtFQUMvRix5QkFBQTtBQUNSO0FBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7QUFBSjtBQUdBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFsZWdyZXlhLUJvbGRcIjtcbiAgICBzcmM6IGxvY2FsKFwiQWxlZ3JleWEtQm9sZFwiKSwgdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb250cy9BbGVncmV5YS1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJBbGVncmV5YS1FeHRyYUJvbGRcIjtcbiAgICBzcmM6IGxvY2FsKFwiQWxlZ3JleWEtRXh0cmFCb2xkXCIpLCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0FsZWdyZXlhLUV4dHJhQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQWxlZ3JleWEtUmVndWxhclwiO1xuICAgIHNyYzogbG9jYWwoXCJBbGVncmV5YS1SZWd1bGFyXCIpLCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0FsZWdyZXlhLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLmhlYWRlcl9ibG9ja3tcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICAgIG1hcmdpbjogLTEwcHggMHB4IDBweCAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiMwMDAgbGluZWFyLWdyYWRpZW50KC0xMDVkZWcsICMxQzlCRUYgMzAlLCAjMUM5QkVGIDgwJSwgIzA4MTAyNiAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDgxMDI2JywgZW5kQ29sb3JzdHI9JyMwMDY2YTEnLCBHcmFkaWVudFR5cGU9MSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjg2YjI7XG59XG5cblxuLmhlYWRlcl9ibG9jayBoMiB7ICAgIFxuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiQWxlZ3JleWEtQm9sZFwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaGVhZGVyX2Jsb2NrIC5wYWdlTWVudSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlcl9ibG9jayAucGFnZU1lbnUgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhlYWRlcl9ibG9jayAucGFnZU1lbnUgbGkgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4uaGVhZGVyX2Jsb2NrIC5wYWdlTWVudSBsaSBhLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XG59XG5cbi5oZWFkZXJfYmxvY2sgLnBhZ2VNZW51IGxpIGE6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTU2OWM3O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyX2Jsb2NrIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmhlYWRlcl9ibG9jayAubmF2YmFyIC50b3AtbmF2IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogNXB4IDhweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmhlYWRlcl9ibG9jayAubmF2YmFyIC50b3AtbmF2IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "5+Dm":
    /*!****************************************************************************!*\
      !*** ./src/app/feature/twitter/component/user-post/user-post.component.ts ***!
      \****************************************************************************/

    /*! exports provided: UserPostComponent */

    /***/
    function Dm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPostComponent", function () {
        return UserPostComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service */
      "F9L9");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/logger.service */
      "fSl4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../user-feed/user-feed.component */
      "jvGB");

      var UserPostComponent = /*#__PURE__*/function () {
        function UserPostComponent(twitterService, logger) {
          var _this = this;

          _classCallCheck(this, UserPostComponent);

          this.twitterService = twitterService;
          this.logger = logger;
          this.fileName = "UserPostComponent";

          this.postTweet = function () {
            _this.logger.debug(_this.fileName, "post tweet");

            _this.logger.debug(_this.fileName, _this.tweet);

            var reqObj = {
              status: _this.tweet
            };

            _this.twitterService.postUserTweet(reqObj).subscribe(_this.postedTweet);
          };

          this.postedTweet = function (result) {
            _this.logger.debug(_this.fileName, "postedTweet");

            _this.logger.debug(_this.fileName, result);

            _this.showModal(result);
          };

          this.showModal = function (result) {
            _this.tweet = '';

            if (result.data && result.resp.statusCode === 200) {
              alert("Successfully posted. Please refresh the page");
            } else {
              alert(" Sorry Content already posted | Server configuration is not correct");
            }
          };
        }

        _createClass(UserPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logger.debug(this.fileName, "userFeeddata");
            this.logger.debug(this.fileName, this.userheadlines);
          }
        }]);

        return UserPostComponent;
      }();

      UserPostComponent.ɵfac = function UserPostComponent_Factory(t) {
        return new (t || UserPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]));
      };

      UserPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserPostComponent,
        selectors: [["app-user-post"]],
        inputs: {
          userheadlines: "userheadlines",
          usertimelines: "usertimelines",
          usermentionslines: "usermentionslines"
        },
        decls: 19,
        vars: 4,
        consts: [[1, "app-user-post__lbl"], [1, "p-fluid", "p-grid", "app-user-post__tweet-area"], [1, "p-field", "p-col-1"], [1, "p-float-label"], ["inputId", "tweetArea", "rows", "3", "cols", "30", "pInputTextarea", "", 3, "ngModel", "ngModelChange"], ["for", "textarea"], ["label", "Tweet", 3, "click"], [1, "app-user-post__tab-area"], ["header", "Tweets"], [3, "userfeeddata"], ["header", "Tweets & Retweets"], ["header", "Mentions"]],
        template: function UserPostComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post your Tweet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPostComponent_Template_textarea_ngModelChange_6_listener($event) {
              return ctx.tweet = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post your tweet...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPostComponent_Template_p_button_click_10_listener() {
              return ctx.postTweet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-tabView");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-tabPanel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-user-feed", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabPanel", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-user-feed", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-tabPanel", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-user-feed", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tweet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userfeeddata", ctx.usertimelines);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userfeeddata", ctx.userheadlines);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userfeeddata", ctx.usermentionslines);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_7__["UserFeedComponent"]],
        styles: ["[_nghost-%COMP%]   .app-user-post__tweet-area[_ngcontent-%COMP%] {\n  margin: 4% auto 0% 45%;\n}\n[_nghost-%COMP%]   .app-user-post__lbl[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-family: \"Alegreya-Bold\";\n  margin-left: 5%;\n}\n[_nghost-%COMP%]   .app-user-post__tab-area[_ngcontent-%COMP%] {\n  font-family: \"Alegreya-Regular\";\n  margin-left: 45%;\n  margin-top: 2%;\n  width: 100%;\n  height: 200px;\n}\n[_nghost-%COMP%]     .p-fluid .p-inputtextarea {\n  width: 900px;\n  height: 100px;\n  border: 1px solid black;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav {\n  border: none;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  width: 300px;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {\n  border-bottom: 2px solid #2196F3 !important;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLHNCQUFBO0FBRlo7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBRlo7QUFJUTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFGWjtBQU1FO0VBQ0MsWUFBQTtFQUNTLGFBQUE7RUFDQSx1QkFBQTtBQUpaO0FBTVE7RUFDSSxZQUFBO0FBSlo7QUFNUTtFQUNJLFlBQUE7QUFKWjtBQU1RO0VBQ0ksMkNBQUE7RUFDQSxnQkFBQTtBQUpaIiwiZmlsZSI6InVzZXItcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIC5hcHAtdXNlci1wb3N0IHtcbiAgICAgICAgJl9fdHdlZXQtYXJlYSB7XG4gICAgICAgICAgICBtYXJnaW46IDQlIGF1dG8gMCUgNDUlO1xuICAgICAgICB9XG4gICAgICAgICZfX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWxlZ3JleWEtQm9sZFwiO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NSVcbiAgICAgICAgfVxuICAgICAgICAmX190YWItYXJlYXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFsZWdyZXlhLVJlZ3VsYXJcIjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQ1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MiU7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXHQ6Om5nLWRlZXAge1xuXHRcdC5wLWZsdWlkIC5wLWlucHV0dGV4dGFyZWF7XG5cdFx0XHR3aWR0aDogOTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuXHRcdH1cbiAgICAgICAgLnAtdGFidmlldyAucC10YWJ2aWV3LW5hdntcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucC10YWJ2aWV3IC5wLXRhYnZpZXctbmF2IGxpIC5wLXRhYnZpZXctbmF2LWxpbmt7XG4gICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgfVxuICAgICAgICAucC10YWJ2aWV3IC5wLXRhYnZpZXctbmF2IGxpIC5wLXRhYnZpZXctbmF2LWxpbms6bm90KC5wLWRpc2FibGVkKTpmb2N1c3tcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE5NkYzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgICAgIH1cblx0fVxufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "7o2P":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/common.service.ts ***!
      \***************************************************/

    /*! exports provided: CommonService */

    /***/
    function o2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/http/http-request.service */
      "buNB");

      var CommonService = function CommonService(_http) {
        _classCallCheck(this, CommonService);

        this._http = _http;
        this.invokeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      };

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]));
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac
      });
      /***/
    },

    /***/
    "7zlE":
    /*!*******************************************************************!*\
      !*** ./src/app/feature/twitter/service/twitter-feed.interface.ts ***!
      \*******************************************************************/

    /*! no exports provided */

    /***/
    function zlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "8vVJ":
    /*!************************************************************!*\
      !*** ./src/app/feature/twitter/service/twitter.service.ts ***!
      \************************************************************/

    /*! exports provided: TwitterService */

    /***/
    function vVJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwitterService", function () {
        return TwitterService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/http/http-request.service */
      "buNB");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/logger.service */
      "fSl4");

      var TwitterService = /*#__PURE__*/function () {
        // tslint:disable-next-line: variable-name
        function TwitterService(http, logger) {
          _classCallCheck(this, TwitterService);

          this.http = http;
          this.logger = logger;
        }

        _createClass(TwitterService, [{
          key: "getUserProfile",
          value: function getUserProfile() {
            var _this2 = this;

            this.logger.debug('getUserProfile');
            return this.http.get("profile_info").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
              return _this2.mapGetUserProfile(result);
            }));
          }
        }, {
          key: "getHomeTimeLine",
          value: function getHomeTimeLine() {
            var _this3 = this;

            this.logger.debug('getHomeTimeLine');
            return this.http.get("home_timeline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
              return _this3.mapGetHomeTimeline(result);
            }));
          }
        }, {
          key: "getUserTimeLine",
          value: function getUserTimeLine() {
            var _this4 = this;

            this.logger.debug('getUserTimeLine');
            return this.http.get("user_timeline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
              return _this4.mapGetHomeTimeline(result);
            }));
          }
        }, {
          key: "getUserMentionsTimeLine",
          value: function getUserMentionsTimeLine() {
            var _this5 = this;

            this.logger.debug('getUserMentionsTimeLine');
            return this.http.get("mentions_timeline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) {
              return _this5.mapGetHomeTimeline(result);
            }));
          }
        }, {
          key: "postUserTweet",
          value: function postUserTweet(req) {
            this.logger.debug('postUserTweet', req);
            return this.http.post("post_tweet", req);
          }
        }, {
          key: "mapGetUserProfile",
          value: function mapGetUserProfile(result) {
            this.logger.debug('mapGetUserProfile', result);
            return result.resp && result.resp.statusCode === 200 ? result.data.data : null;
          }
        }, {
          key: "mapGetHomeTimeline",
          value: function mapGetHomeTimeline(result) {
            this.logger.debug('mapGetHomeTimeline', result);
            return result.resp && result.resp.statusCode === 200 ? result.data : null;
          }
        }]);

        return TwitterService;
      }();

      TwitterService.ɵfac = function TwitterService_Factory(t) {
        return new (t || TwitterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]));
      };

      TwitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TwitterService,
        factory: TwitterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        serverUrl: 'http://localhost:3000/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BJN1":
    /*!**********************************************************************************!*\
      !*** ./src/app/feature/twitter/component/user-profile/user-profile.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: UserprofileComponent */

    /***/
    function BJN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () {
        return UserprofileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/logger.service */
      "fSl4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserprofileComponent_ng_container_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userProfile_r1 == null ? null : userProfile_r1.name);
        }
      }

      function UserprofileComponent_ng_container_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userProfile_r1 == null ? null : userProfile_r1.username);
        }
      }

      function UserprofileComponent_ng_container_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userProfile_r1 == null ? null : userProfile_r1.id);
        }
      }

      function UserprofileComponent_ng_container_0_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userProfile_r1 == null ? null : userProfile_r1.location);
        }
      }

      function UserprofileComponent_ng_container_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Joined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, userProfile_r1 == null ? null : userProfile_r1.created_at, "MMM yyyy"));
        }
      }

      function UserprofileComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Profile Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserprofileComponent_ng_container_0_div_7_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserprofileComponent_ng_container_0_div_8_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserprofileComponent_ng_container_0_div_9_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserprofileComponent_ng_container_0_div_10_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserprofileComponent_ng_container_0_div_11_Template, 6, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var userProfile_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", userProfile_r1 == null ? null : userProfile_r1.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", userProfile_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", userProfile_r1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", userProfile_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", userProfile_r1.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", userProfile_r1.created_at);
        }
      }

      var UserprofileComponent = /*#__PURE__*/function () {
        function UserprofileComponent(logger) {
          _classCallCheck(this, UserprofileComponent);

          this.logger = logger;
          this.userprofiledata = null;
        }

        _createClass(UserprofileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logger.debug("UserprofileComponent", "Input value ".concat(this.userprofiledata));
          }
        }]);

        return UserprofileComponent;
      }();

      UserprofileComponent.ɵfac = function UserprofileComponent_Factory(t) {
        return new (t || UserprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]));
      };

      UserprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserprofileComponent,
        selectors: [["app-userprofile"]],
        inputs: {
          userprofiledata: "userprofiledata"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "app-userprofile", "app-userprofile__left"], [1, "app-userprofile__centered"], [1, "app-userprofile__hdr"], ["alt", "Twitter Avatar", 1, "app-userprofile__centered--img", 3, "src"], [1, "app-userprofile__centered__table"], ["class", "app-userprofile__centered__table--row", 4, "ngIf"], [1, "app-userprofile__centered__table--row"], [1, "app-userprofile__centered__table--data"]],
        template: function UserprofileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserprofileComponent_ng_container_0_Template, 12, 6, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userprofiledata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".app-userprofile[_ngcontent-%COMP%] {\n  width: 30%;\n  position: absolute;\n  height: 200%;\n  overflow-x: hidden;\n  font-family: \"Alegreya-Bold\";\n  color: #fff;\n}\n.app-userprofile__left[_ngcontent-%COMP%] {\n  left: 0;\n  background-color: #1c9bef;\n}\n.app-userprofile__hdr[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 15% 0% 10%;\n  font-weight: bold;\n}\n.app-userprofile__centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.app-userprofile__centered--img[_ngcontent-%COMP%] {\n  width: 75px;\n  border-radius: 50%;\n}\n.app-userprofile__centered__table[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: table;\n  margin: 5% auto 0%;\n  text-align: left;\n  font-family: \"Alegreya-Regular\";\n}\n.app-userprofile__centered__table--row[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.app-userprofile__centered__table--data[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 30px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxPQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFaO0FBRVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUFaO0FBRVk7RUFDSSxrQkFBQTtBQUFoQjtBQUVZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBaEIiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC11c2VycHJvZmlsZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhLUJvbGQnO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJl9fbGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzliZWY7XG4gICAgfVxuICAgICZfX2hkciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW46IDE1JSAwJSAxMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICZfX2NlbnRlcmVkIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYtLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAmX190YWJsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhLVJlZ3VsYXInO1xuXG4gICAgICAgICAgICAmLS1yb3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtLWRhdGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "F9L9":
    /*!**************************************************!*\
      !*** ./src/app/feature/twitter/service/index.ts ***!
      \**************************************************/

    /*! exports provided: TwitterService */

    /***/
    function F9L9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _twitter_feed_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./twitter-feed.interface */
      "7zlE");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./twitter.service */
      "8vVJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TwitterService", function () {
        return _twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"];
      });
      /***/

    },

    /***/
    "J6E/":
    /*!********************************************************!*\
      !*** ./src/app/core/http/error-handler.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: HttpResponseWithMessage, ErrorHandlerInterceptor */

    /***/
    function J6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpResponseWithMessage", function () {
        return HttpResponseWithMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function () {
        return ErrorHandlerInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../logger.service */
      "fSl4"); // const log = new Logger('ErrorHandlerInterceptor');


      var HttpResponseWithMessage = /*#__PURE__*/function (_angular_common_http_) {
        _inherits(HttpResponseWithMessage, _angular_common_http_);

        var _super = _createSuper(HttpResponseWithMessage);

        function HttpResponseWithMessage() {
          _classCallCheck(this, HttpResponseWithMessage);

          return _super.apply(this, arguments);
        }

        return HttpResponseWithMessage;
      }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]);
      /**
       * Adds a default error handler to all requests.
       */


      var ErrorHandlerInterceptor = /*#__PURE__*/function () {
        function ErrorHandlerInterceptor(_log) {
          _classCallCheck(this, ErrorHandlerInterceptor);

          this._log = _log;
        }
        /**
         * Intercept API error response
         * @param  {HttpRequest<any>} request
         * @param  {HttpHandler} next
         * @returns Observable
         */


        _createClass(ErrorHandlerInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this6 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
              return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (errorData) {
                // retry only if error status is 500
                return errorData.status === 500 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(errorData) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorData);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return _this6.errorHandler(error);
            }));
          }
          /**
           * Customize the default error handler here if needed
           * @param response
           * @returns handler
           */

        }, {
          key: "errorHandler",
          value: function errorHandler(response) {
            var errormessage = "url: ".concat(response.url, " status: ").concat(response.status, " statusText: ").concat(response.statusText, " body: ").concat(response.body);

            this._log.error('API error', errormessage);

            throw response;
          }
        }]);

        return ErrorHandlerInterceptor;
      }();

      ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) {
        return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_4__["Logger"]));
      };

      ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ErrorHandlerInterceptor,
        factory: ErrorHandlerInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./header/header.component */
      "320Y");
      /* harmony import */


      var _leftpane_leftpane_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./leftpane/leftpane.component */
      "iQVp");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./loader/loader.component */
      "o7am");
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./landing/landing.component */
      "YYeE");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/common.service */
      "7o2P");
      /* harmony import */


      var _feature_twitter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../feature/twitter/component */
      "xFYG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var modules = [primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]].concat(modules), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["AppLoaderComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _leftpane_leftpane_component__WEBPACK_IMPORTED_MODULE_10__["LeftpaneComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"], _feature_twitter_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"], _feature_twitter_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"], _feature_twitter_component__WEBPACK_IMPORTED_MODULE_14__["UserPostComponent"], _feature_twitter_component__WEBPACK_IMPORTED_MODULE_14__["UserFeedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["AppLoaderComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _leftpane_leftpane_component__WEBPACK_IMPORTED_MODULE_10__["LeftpaneComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/landing/landing.component */
      "YYeE");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Twitter';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
          }
        },
        directives: [_shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Y0bC":
    /*!*******************************************!*\
      !*** ./src/app/feature/feature.module.ts ***!
      \*******************************************/

    /*! exports provided: FeatureModule */

    /***/
    function Y0bC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureModule", function () {
        return FeatureModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _feature_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./feature-routing.module */
      "uWxt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FeatureModule = function FeatureModule() {
        _classCallCheck(this, FeatureModule);
      };

      FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FeatureModule
      });
      FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function FeatureModule_Factory(t) {
          return new (t || FeatureModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_1__["FeatureRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_1__["FeatureRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "YYeE":
    /*!*****************************************************!*\
      !*** ./src/app/shared/landing/landing.component.ts ***!
      \*****************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function YYeE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "320Y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../loader/loader.component */
      "o7am");
      /**
       *
       *
       * @export
       * @class LandingComponent
       */


      var LandingComponent = function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      };

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)();
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 4,
        vars: 0,
        consts: [[1, "main_container"], ["name", "twitter-main"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["AppLoaderComponent"]],
        styles: [".main_container[_ngcontent-%COMP%]{    \n    width: 100%;\n    margin: 0 auto;\n    padding: 0;\n    height: 100%;\n}\n\n.dashboard_container[_ngcontent-%COMP%] {\n    height: 88%;\n}\n\n.dashboard_left[_ngcontent-%COMP%]{\n    width: 300px;\n    float: left;\n    \n    height: 100%;\n    transition: width 200ms;\n}\n\n.dashboard_right[_ngcontent-%COMP%]{\n    width: calc(100% - 50px);\n    transition: width 200ms;\n    height: calc(100% - 50px);\n}\n\n.dashboard_left.active[_ngcontent-%COMP%]{\n    width: 50px;\n}\n\n.dashboard_right.active[_ngcontent-%COMP%]{\n    width: calc(100% - 52px);\n}\n\n.dashboard_grid[_ngcontent-%COMP%]{\n    padding: 0px;\n}\n\n.dashboard_detail[_ngcontent-%COMP%]{\n    padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRhaW5lcnsgICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmRfY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDg4JTtcbn1cblxuLmRhc2hib2FyZF9sZWZ0e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvKiBoZWlnaHQ6IDEwMDBweDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XG59XG5cbi5kYXNoYm9hcmRfcmlnaHR7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG59XG5cbi5kYXNoYm9hcmRfbGVmdC5hY3RpdmV7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5kYXNoYm9hcmRfcmlnaHQuYWN0aXZle1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MnB4KTtcbn1cblxuLmRhc2hib2FyZF9ncmlke1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmRhc2hib2FyZF9kZXRhaWx7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _feature_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./feature/feature.module */
      "Y0bC");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _feature_feature_module__WEBPACK_IMPORTED_MODULE_4__["FeatureModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _feature_feature_module__WEBPACK_IMPORTED_MODULE_4__["FeatureModule"]]
        });
      })();
      /***/

    },

    /***/
    "bdhN":
    /*!******************************************************************!*\
      !*** ./src/app/feature/twitter/component/main/main.component.ts ***!
      \******************************************************************/

    /*! exports provided: MainComponent, tranformResult */

    /***/
    function bdhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tranformResult", function () {
        return tranformResult;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service */
      "F9L9");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/logger.service */
      "fSl4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../user-profile/user-profile.component */
      "BJN1");
      /* harmony import */


      var _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../user-post/user-post.component */
      "5+Dm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MainComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function MainComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-userprofile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-user-post", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "router-outlet");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var tmp_0_0 = null;
          var tmp_1_0 = null;
          var tmp_2_0 = null;
          var tmp_3_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("userprofiledata", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx_r2.userFeedAsyncResult$)) == null ? null : tmp_0_0.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("userheadlines", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, ctx_r2.userFeedAsyncResult$)) == null ? null : tmp_1_0.getHeadLines)("usertimelines", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, ctx_r2.userFeedAsyncResult$)) == null ? null : tmp_2_0.getUserTimeLines)("usermentionslines", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, ctx_r2.userFeedAsyncResult$)) == null ? null : tmp_3_0.getMentionTimeLines);
        }
      }

      function MainComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please configure the server settings to access Twitter API. Update below parameter in Server.js ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "consumer_key");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "consumer_secret");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "access_token");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "access_token_secret");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "bearer_token");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(twitterService, logger) {
          var _this7 = this;

          _classCallCheck(this, MainComponent);

          this.twitterService = twitterService;
          this.logger = logger;
          this.fileName = "MainComponent";

          this.onGetFeedError = function (error) {
            _this7.logger.debug(_this7.fileName, "onGetFeedError");

            _this7.logger.debug(_this7.fileName, error);
          };
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userFeedAsyncResult$ = this.twitterData();
            this.logger.debug(this.fileName, "userFeeddata");
            this.logger.debug(this.fileName, this.userFeedAsyncResult$); // tslint:disable-next-line: deprecation
          }
        }, {
          key: "twitterData",
          value: function twitterData() {
            var _this8 = this;

            // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.twitterService.getUserProfile(), this.twitterService.getHomeTimeLine(), this.twitterService.getUserTimeLine(), this.twitterService.getUserMentionsTimeLine()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", this.onGetFeedError(error));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return tranformResult(result);
            }));
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_4__["TwitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 6,
        vars: 5,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["userProfileTemplate", ""], ["emptyTemplate", ""], [1, "app-main"], [3, "userprofiledata"], [1, "app-main__centered"], [3, "userheadlines", "usertimelines", "usermentionslines"], [1, "app-main__empty-container"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MainComponent_ng_container_0_Template, 1, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MainComponent_ng_template_2_Template, 9, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainComponent_ng_template_4_Template, 13, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.userFeedAsyncResult$))("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserprofileComponent"], _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_8__["UserPostComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".app-main[_ngcontent-%COMP%] {\n  right: 0;\n  background-color: white;\n}\n.app-main__centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 36%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.app-main__empty-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20%;\n  font-family: \"Alegreya-Regular\";\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  text-shadow: 1px 1px 1px #757575;\n  border-right: 1px solid rgba(217, 217, 217, 0);\n  transition: all 0.3s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0Qsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFFRDtBQUVFO0VBQ0Qsa0JBQUE7RUFDRyxlQUFBO0VBQ0YsK0JBQUE7RUFDRCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0csZ0NBQUE7RUFDQSw4Q0FBQTtFQUtBLDRCQUFBO0FBQUoiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbWFpbntcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAmX19jZW50ZXJlZHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogMzYlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAmX19lbXB0eS1jb250YWluZXIgdWwgbGkgYXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgZm9udC1mYW1pbHk6ICdBbGVncmV5YS1SZWd1bGFyJztcblx0Zm9udC1zaXplOjIwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzc1NzU3NTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIxNywgMjE3LCAyMTcsIDApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuXG4gIH1cbn0iXX0= */"]
      });

      function tranformResult(result) {
        console.log("tranformResult");
        console.log("MainComponent", result);
        var userData = result[0];
        var getHeadLinesData = result[1];
        var getUserTimeLinesData = result[2];
        var getMentionTimeLinesData = result[3];
        console.log({
          user: userData,
          getHeadLines: getHeadLinesData,
          getUserTimeLines: getUserTimeLinesData,
          getMentionTimeLines: getMentionTimeLinesData
        });
        return {
          user: userData,
          getHeadLines: getHeadLinesData,
          getUserTimeLines: getUserTimeLinesData,
          getMentionTimeLines: getMentionTimeLinesData
        };
      }
      /***/

    },

    /***/
    "buNB":
    /*!***************************************************!*\
      !*** ./src/app/core/http/http-request.service.ts ***!
      \***************************************************/

    /*! exports provided: HttpRequestService */

    /***/
    function buNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpRequestService", function () {
        return HttpRequestService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/logger.service */
      "fSl4");

      var HttpRequestService = /*#__PURE__*/function () {
        function HttpRequestService(http, logger) {
          _classCallCheck(this, HttpRequestService);

          this.http = http;
          this.logger = logger;
          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            responseType: 'JSON'
          });
          this.logger.debug("HttpRequestService", _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl);
        }
        /**
         * Gets http request service
         * @param url
         * @param [header]
         * @returns get
         */


        _createClass(HttpRequestService, [{
          key: "get",
          value: function get(path, header) {
            this.logger.debug("HttpRequestService", "get");
            this.logger.debug("HttpRequestService", _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path);
            header = header !== null && header !== void 0 ? header : this.header;
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path;
            return this.http.get(url, header);
          }
          /**
           * Posts http request service
           * @param url
           * @param body
           * @param [header]
           * @returns post
           */

        }, {
          key: "post",
          value: function post(path, body, header) {
            this.logger.debug("HttpRequestService", "post");
            this.logger.debug("HttpRequestService", body);
            this.logger.debug("HttpRequestService", _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path);
            header = header !== null && header !== void 0 ? header : this.header;
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path;
            return this.http.post(url, body, header);
          }
          /**
           * Puts http request service
           * @param url
           * @param [body]
           * @param [header]
           * @returns put
           */

        }, {
          key: "put",
          value: function put(path, body, header) {
            header = header !== null && header !== void 0 ? header : this.header;
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path;
            return this.http.put(url, body, header);
          }
          /**
           * Deletes http request service
           * @param url
           * @param [header]
           * @param [requestBody]
           * @returns delete
           */

        }, {
          key: "delete",
          value: function _delete(path, header, requestBody) {
            var options = {
              headers: header === undefined ? this.header : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](header),
              body: requestBody
            };
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + path;
            return this.http.request('delete', url, options);
          }
        }]);

        return HttpRequestService;
      }();

      HttpRequestService.ɵfac = function HttpRequestService_Factory(t) {
        return new (t || HttpRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]));
      };

      HttpRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpRequestService,
        factory: HttpRequestService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "fSl4":
    /*!****************************************!*\
      !*** ./src/app/core/logger.service.ts ***!
      \****************************************/

    /*! exports provided: LogLevel, Logger */

    /***/
    function fSl4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
        return LogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Logger", function () {
        return Logger;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogLevel;

      (function (LogLevel) {
        LogLevel[LogLevel["Off"] = 0] = "Off";
        LogLevel[LogLevel["Custom"] = 1] = "Custom";
        LogLevel[LogLevel["Error"] = 2] = "Error";
        LogLevel[LogLevel["Warning"] = 3] = "Warning";
        LogLevel[LogLevel["Info"] = 4] = "Info";
        LogLevel[LogLevel["Debug"] = 5] = "Debug";
      })(LogLevel || (LogLevel = {}));

      var Logger = /*#__PURE__*/function () {
        function Logger() {
          _classCallCheck(this, Logger);
        }
        /**
         * Enables production mode.
         * Sets logging level to LogLevel.Warning.
         */


        _createClass(Logger, [{
          key: "enableProductionMode",
          value: function enableProductionMode() {
            Logger.level = LogLevel.Error;
          }
          /**
           * Logs messages or objects  with the debug level.
           * Works the same as console.log().
           */

        }, {
          key: "debug",
          value: function debug(source) {
            for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              objects[_key - 1] = arguments[_key];
            }

            this.log(source, console.log, LogLevel.Debug, objects);
          }
          /**
           * Logs messages or objects  with the info level.
           * Works the same as console.log().
           */

        }, {
          key: "info",
          value: function info(source) {
            for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              objects[_key2 - 1] = arguments[_key2];
            }

            // tslint:disable-next-line:no-console
            this.log(source, console.info, LogLevel.Info, objects);
          }
          /**
           * Logs messages or objects  with the warning level.
           * Works the same as console.log().
           */

        }, {
          key: "warn",
          value: function warn(source) {
            for (var _len3 = arguments.length, objects = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              objects[_key3 - 1] = arguments[_key3];
            }

            this.log(source, console.warn, LogLevel.Warning, objects);
          }
          /**
           * Logs messages or objects  with the error level.
           * Works the same as console.log().
           */

        }, {
          key: "error",
          value: function error(source) {
            for (var _len4 = arguments.length, objects = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              objects[_key4 - 1] = arguments[_key4];
            }

            this.log(source, console.error, LogLevel.Error, objects);
          }
          /**
           * @function log
           * @param source
           * @param func
           * @param level
           * @param objects
           * @description log messages and events
           */

        }, {
          key: "log",
          value: function log(source, func, level, objects) {
            var log = ['[' + source + '] ::'].concat(objects);

            if (level <= Logger.level) {
              func.apply(console, log);
              Logger.outputs.forEach(function (output) {
                return output.apply(output, [source, level, objects]);
              });
            }
          }
        }]);

        return Logger;
      }();
      /**
       * Current logging level.
       * Set it to LogLevel.Off to disable logs completely.
       */


      Logger.level = LogLevel.Debug;
      /**
       * Additional log outputs.
       */

      Logger.outputs = [];

      Logger.ɵfac = function Logger_Factory(t) {
        return new (t || Logger)();
      };

      Logger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Logger,
        factory: Logger.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "iQVp":
    /*!*******************************************************!*\
      !*** ./src/app/shared/leftpane/leftpane.component.ts ***!
      \*******************************************************/

    /*! exports provided: LeftpaneComponent */

    /***/
    function iQVp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftpaneComponent", function () {
        return LeftpaneComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LeftpaneComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Left pane for navigation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LeftpaneComponent = /*#__PURE__*/function () {
        function LeftpaneComponent() {
          _classCallCheck(this, LeftpaneComponent);

          this.isSidebarActive = false;
          this.changeToggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @function callToggle
         * @description emit left pane expand/collapse
         */


        _createClass(LeftpaneComponent, [{
          key: "callToggle",
          value: function callToggle() {
            this.isSidebarActive = !this.isSidebarActive;
            this.changeToggleEvent.emit();
          }
        }]);

        return LeftpaneComponent;
      }();

      LeftpaneComponent.ɵfac = function LeftpaneComponent_Factory(t) {
        return new (t || LeftpaneComponent)();
      };

      LeftpaneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LeftpaneComponent,
        selectors: [["app-leftpane"]],
        outputs: {
          changeToggleEvent: "changeToggleEvent"
        },
        decls: 5,
        vars: 1,
        consts: [[1, "dashboard_box"], [1, "sidebar_block"], ["class", "sidebar_content", 4, "ngIf"], [1, "collapse-icon"], ["id", "side-nav-toggle-icon", 1, "toggle-icon", "glyphicon", 3, "click"], [1, "sidebar_content"]],
        template: function LeftpaneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftpaneComponent_div_2_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftpaneComponent_Template_span_click_4_listener() {
              return ctx.callToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSidebarActive);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".sidebar_block[_ngcontent-%COMP%]{\n    height: calc(100% - 50px);\n    overflow: auto;\n    border-right: black 1px;\n}\n.sidebar_block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    border-bottom: 1px solid #dcdcdc;\n    padding: 10px;\n    margin: 0px 0px 10px;\n    font-size: 16px;\n    text-transform: uppercase;\n}\n.toggle-icon[_ngcontent-%COMP%]{ \n    color: #212121;\n    font-size: 1.75em;\n    padding-left: 20px;\n    cursor: pointer;\n}\n.toggle-icon[_ngcontent-%COMP%]:before{\n    content: ' \\2039';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnRwYW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImxlZnRwYW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcl9ibG9ja3tcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlci1yaWdodDogYmxhY2sgMXB4O1xufVxuLnNpZGViYXJfYmxvY2sgaDN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRvZ2dsZS1pY29ueyBcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9nZ2xlLWljb246YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcgXFwyMDM5Jztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "jvGB":
    /*!****************************************************************************!*\
      !*** ./src/app/feature/twitter/component/user-feed/user-feed.component.ts ***!
      \****************************************************************************/

    /*! exports provided: UserFeedComponent */

    /***/
    function jvGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFeedComponent", function () {
        return UserFeedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/logger.service */
      "fSl4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserFeedComponent_ng_container_1_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }

        if (rf & 2) {
          var feedData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", feedData_r1.user.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function UserFeedComponent_ng_container_1_span_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@ ", feedData_r1.user.screen_name, "");
        }
      }

      function UserFeedComponent_ng_container_1_span_4_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, feedData_r1.user.created_at, "hh", "UTC"), " hrs");
        }
      }

      function UserFeedComponent_ng_container_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserFeedComponent_ng_container_1_span_4_span_2_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserFeedComponent_ng_container_1_span_4_span_3_Template, 3, 5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feedData_r1.user.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedData_r1.user.screen_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedData_r1.user.created_at);
        }
      }

      function UserFeedComponent_ng_container_1_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }

        if (rf & 2) {
          var feedData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", feedData_r1.user.profile_banner_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function UserFeedComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserFeedComponent_ng_container_1_img_2_Template, 1, 1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserFeedComponent_ng_container_1_span_4_Template, 4, 3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserFeedComponent_ng_container_1_img_6_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var feedData_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedData_r1.user.profile_image_url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedData_r1.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.sanitizeText(feedData_r1.full_text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedData_r1.user.profile_banner_url);
        }
      }

      var UserFeedComponent = /*#__PURE__*/function () {
        function UserFeedComponent(logger, sanitizer) {
          _classCallCheck(this, UserFeedComponent);

          this.logger = logger;
          this.sanitizer = sanitizer;
          this.userfeeddata = null;
        }

        _createClass(UserFeedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logger.debug("UserFeedComponent", "Input value ".concat(this.userfeeddata));
          }
        }, {
          key: "sanitizeUrl",
          value: function sanitizeUrl(contentHtml) {
            var urlRegex = /(https?:\/\/[^ ]*)/;
            var url = contentHtml.match(urlRegex) ? contentHtml.match(urlRegex)[1] : null;
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }, {
          key: "sanitizeText",
          value: function sanitizeText(contentText) {
            var urlRegex = /(?:https?|ftp):\/\/[\n\S]+/g;
            var text = contentText.replace(urlRegex, '');
            return this.sanitizer.bypassSecurityTrustHtml(text) ? this.sanitizer.bypassSecurityTrustHtml(text) : null;
          }
        }]);

        return UserFeedComponent;
      }();

      UserFeedComponent.ɵfac = function UserFeedComponent_Factory(t) {
        return new (t || UserFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      UserFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserFeedComponent,
        selectors: [["app-user-feed"]],
        inputs: {
          userfeeddata: "userfeeddata"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "app-user-feed__row", "app-user-feed__wrapper"], [4, "ngFor", "ngForOf"], [1, "app-user-feed__container"], ["class", "app-user-feed__profile-img", 3, "src", 4, "ngIf"], [1, "app-user-feed__user-cont"], ["class", "app-user-feed__name", 4, "ngIf"], [1, "app-user-feed__full-text", 3, "innerHtml"], ["class", "app-user-feed__banner", 3, "src", 4, "ngIf"], [1, "app-user-feed__profile-img", 3, "src"], [1, "app-user-feed__name"], ["class", "app-user-feed__screen-name", 4, "ngIf"], ["class", "app-user-feed__created-at", 4, "ngIf"], [1, "app-user-feed__screen-name"], [1, "app-user-feed__created-at"], [1, "app-user-feed__banner", 3, "src"]],
        template: function UserFeedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserFeedComponent_ng_container_1_Template, 7, 4, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userfeeddata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: ["[_nghost-%COMP%]   .app-user-feed__wrapper[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  height: 800px;\n  overflow: scroll;\n}\n[_nghost-%COMP%]   .app-user-feed__row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n[_nghost-%COMP%]   .app-user-feed__container[_ngcontent-%COMP%] {\n  border: 2px solid #2196F3;\n  padding: 3% 2%;\n  margin: 2% auto;\n  border-radius: 20px;\n}\n[_nghost-%COMP%]   .app-user-feed__banner[_ngcontent-%COMP%] {\n  height: 250px;\n  padding: 4px;\n  width: 70%;\n  background-size: cover;\n  border-radius: 20px;\n  margin-right: 10%;\n}\n[_nghost-%COMP%]   .app-user-feed__full-text[_ngcontent-%COMP%] {\n  margin: 1% 9%;\n  font-size: 1.3rem;\n  font-family: \"Alegreya-Regular\";\n  text-align: left;\n}\n[_nghost-%COMP%]   .app-user-feed__profile-img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  float: left;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .app-user-feed__name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-family: \"Alegreya-Bold\";\n  margin: auto 1%;\n  float: left;\n  display: flex;\n  width: 1200px;\n}\n[_nghost-%COMP%]   .app-user-feed__screen-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-family: \"Alegreya-Regular\";\n  margin: auto 1%;\n}\n[_nghost-%COMP%]   .app-user-feed__created-at[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: auto 2%;\n  font-family: \"Alegreya-Regular\";\n}\n[_nghost-%COMP%]   .app-user-feed__user-cont[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREg7QUFJQztFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZGO0FBS0M7RUFDQyx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQU1DO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNQztFQUNDLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9DO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBUUM7RUFDQyxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQU5GO0FBU0M7RUFDQyxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUM7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQVJGO0FBV0M7RUFDQyxhQUFBO0FBVEYiLCJmaWxlIjoidXNlci1mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCAuYXBwLXVzZXItZmVlZCB7XG5cdCZfX3dyYXBwZXIge1xuXHQgIG1heC13aWR0aDogMTAyNHB4O1xuXHQgIGhlaWdodDo4MDBweDtcblx0ICBvdmVyZmxvdzogc2Nyb2xsO1xuXHR9XG5cblx0Jl9fcm93OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdGNsZWFyOiBib3RoO1xuXHQgIH1cblxuXHQmX19jb250YWluZXJ7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzIxOTZGMztcblx0XHRwYWRkaW5nOiAzJSAyJTtcblx0XHRtYXJnaW46IDIlIGF1dG87XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0fVxuXG5cdCZfX2Jhbm5lcntcblx0XHRoZWlnaHQ6IDI1MHB4O1xuXHRcdHBhZGRpbmc6IDRweDtcblx0XHR3aWR0aDogNzAlO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwJTtcblx0fVxuXHQmX19mdWxsLXRleHR7XG5cdFx0bWFyZ2luOiAxJSA5JTtcblx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRmb250LWZhbWlseTogXCJBbGVncmV5YS1SZWd1bGFyXCI7XG5cdFx0dGV4dC1hbGlnbjpsZWZ0XG5cdH1cblxuXHQmX19wcm9maWxlLWltZ3tcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0d2lkdGg6IDYwcHg7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0fVxuXG5cdCZfX25hbWV7XG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0Zm9udC1mYW1pbHk6IFwiQWxlZ3JleWEtQm9sZFwiO1xuXHRcdG1hcmdpbjogYXV0byAxJTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHdpZHRoOiAxMjAwcHg7XG5cdH1cblxuXHQmX19zY3JlZW4tbmFtZXtcblx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRmb250LWZhbWlseTogXCJBbGVncmV5YS1SZWd1bGFyXCI7XG5cdFx0bWFyZ2luOiBhdXRvIDElO1xuXHR9XG5cblx0Jl9fY3JlYXRlZC1hdHtcblx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRtYXJnaW46IGF1dG8gMiU7XG5cdFx0Zm9udC1mYW1pbHk6IFwiQWxlZ3JleWEtUmVndWxhclwiO1xuXHR9XG5cblx0Jl9fdXNlci1jb250e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "o7am":
    /*!***************************************************!*\
      !*** ./src/app/shared/loader/loader.component.ts ***!
      \***************************************************/

    /*! exports provided: AppLoaderComponent */

    /***/
    function o7am(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function () {
        return AppLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service/loader.service */
      "yOHA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppLoaderComponent_dls_layout_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dls-layout-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dls-progress-circular-indeterminate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      /**
       *
       *
       * @export
       * @class AppLoaderComponent
       */


      var AppLoaderComponent =
      /**
       *Creates an instance of AppLoaderComponent.
       * @param {LoaderService} loaderService
       * @memberof AppLoaderComponent
       */
      function AppLoaderComponent(loaderService) {
        _classCallCheck(this, AppLoaderComponent);

        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isAppLoading;
      };

      AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) {
        return new (t || AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
      };

      AppLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppLoaderComponent,
        selectors: [["app-loader"]],
        inputs: {
          message: "message"
        },
        decls: 2,
        vars: 3,
        consts: [["id", "loader-container", "class", "loader-overlay", 4, "ngIf"], ["id", "loader-container", 1, "loader-overlay"], [1, "text-xs-center"], ["id", "progress-loader", 1, "loader"]],
        template: function AppLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppLoaderComponent_dls_layout_container_0_Template, 3, 0, "dls-layout-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".fa[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 1;\n  background-color: #000;\n}\n.loader-overlay[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5sb2FkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5sb2FkZXItb3ZlcmxheSAubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./http/api-prefix.interceptor */
      "+YFA");
      /* harmony import */


      var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./http/error-handler.interceptor */
      "J6E/");
      /* harmony import */


      var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./route-reusable-strategy */
      "znf/");
      /* harmony import */


      var _http_http_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./http/http-request.service */
      "buNB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        // Import guard
        if (parentModule) {
          throw new Error("".concat(parentModule, " has already been loaded. Import Core module in the AppModule only."));
        }
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](CoreModule, 12));
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_3__["ApiPrefixInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerInterceptor"],
          multi: true
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__["RouteReusableStrategy"]
        }, _http_http_request_service__WEBPACK_IMPORTED_MODULE_6__["HttpRequestService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uWxt":
    /*!***************************************************!*\
      !*** ./src/app/feature/feature-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: routes, FeatureRoutingModule */

    /***/
    function uWxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureRoutingModule", function () {
        return FeatureRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _twitter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./twitter/component */
      "xFYG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _twitter_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        outlet: 'twitter-main'
      }];

      var FeatureRoutingModule = function FeatureRoutingModule() {
        _classCallCheck(this, FeatureRoutingModule);
      };

      FeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FeatureRoutingModule
      });
      FeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function FeatureRoutingModule_Factory(t) {
          return new (t || FeatureRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xFYG":
    /*!****************************************************!*\
      !*** ./src/app/feature/twitter/component/index.ts ***!
      \****************************************************/

    /*! exports provided: UserprofileComponent, UserPostComponent, UserFeedComponent, MainComponent, tranformResult */

    /***/
    function xFYG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "BJN1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () {
        return _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserprofileComponent"];
      });
      /* harmony import */


      var _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-post/user-post.component */
      "5+Dm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserPostComponent", function () {
        return _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_1__["UserPostComponent"];
      });
      /* harmony import */


      var _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-feed/user-feed.component */
      "jvGB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserFeedComponent", function () {
        return _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_2__["UserFeedComponent"];
      });
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main/main.component */
      "bdhN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "tranformResult", function () {
        return _main_main_component__WEBPACK_IMPORTED_MODULE_3__["tranformResult"];
      });
      /***/

    },

    /***/
    "yOHA":
    /*!*********************************************************!*\
      !*** ./src/app/shared/loader/service/loader.service.ts ***!
      \*********************************************************/

    /*! exports provided: LoaderService */

    /***/
    function yOHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       *
       *
       * @export
       * @class LoaderService
       */


      var LoaderService = /*#__PURE__*/function () {
        function LoaderService() {
          _classCallCheck(this, LoaderService);

          // public isCompLoading = new Subject<boolean>();
          this.isAppLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }
        /**
         * @function showBlockLoader
         * @description emit to show app loader
         */


        _createClass(LoaderService, [{
          key: "showBlockLoader",
          value: function showBlockLoader() {
            this.isAppLoading.next(true);
          }
          /**
           * @function hideBlockLoader
           * @description emit to hide app loader
           */

        }, {
          key: "hideBlockLoader",
          value: function hideBlockLoader() {
            this.isAppLoading.next(false);
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || LoaderService)();
      };

      LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoaderService,
        factory: LoaderService.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "znf/":
    /*!*************************************************!*\
      !*** ./src/app/core/route-reusable-strategy.ts ***!
      \*************************************************/

    /*! exports provided: RouteReusableStrategy */

    /***/
    function znf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function () {
        return RouteReusableStrategy;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logger.service */
      "fSl4");
      /**
       * A route strategy allowing for explicit route reuse.
       * Used as a workaround for https://github.com/angular/angular/issues/18374
       * To reuse a given route, add `data: { reuse: true }` to the route definition.
       */


      var RouteReusableStrategy = /*#__PURE__*/function (_angular_router__WEBP) {
        _inherits(RouteReusableStrategy, _angular_router__WEBP);

        var _super2 = _createSuper(RouteReusableStrategy);

        function RouteReusableStrategy(_log) {
          var _this9;

          _classCallCheck(this, RouteReusableStrategy);

          _this9 = _super2.call(this);
          _this9._log = _log;
          _this9.fileName = 'route reusable';
          return _this9;
        }

        _createClass(RouteReusableStrategy, [{
          key: "shouldDetach",
          value: function shouldDetach(route) {
            this._log.debug(this.fileName, route);

            return false;
          }
        }, {
          key: "store",
          value: function store(route, detachedTree) {
            this._log.debug(this.fileName, route);

            this._log.debug(this.fileName, detachedTree);
          }
        }, {
          key: "shouldAttach",
          value: function shouldAttach(route) {
            this._log.debug(this.fileName, route);

            return false;
          }
        }, {
          key: "retrieve",
          value: function retrieve(route) {
            this._log.debug(this.fileName, route);

            return null;
          }
        }, {
          key: "shouldReuseRoute",
          value: function shouldReuseRoute(future, curr) {
            this._log.debug(this.fileName, future);

            this._log.debug(this.fileName, curr);

            return future.routeConfig === curr.routeConfig || future.data.reuse;
          }
        }]);

        return RouteReusableStrategy;
      }(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]);

      RouteReusableStrategy.ɵfac = function RouteReusableStrategy_Factory(t) {
        return new (t || RouteReusableStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]));
      };

      RouteReusableStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RouteReusableStrategy,
        factory: RouteReusableStrategy.ɵfac
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map