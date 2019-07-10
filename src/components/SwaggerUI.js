Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2,
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _swaggerUi = require('swagger-ui-react/swagger-ui.js');

var _swaggerUi2 = _interopRequireDefault(_swaggerUi);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SwaggerUI = (function(_React$Component) {
  (0, _inherits3.default)(SwaggerUI, _React$Component);

  function SwaggerUI(props) {
    (0, _classCallCheck3.default)(this, SwaggerUI);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (SwaggerUI.__proto__ || (0, _getPrototypeOf2.default)(SwaggerUI)).call(
        this,
        props,
      ),
    );

    _this.requestInterceptor = function(req) {
      if (typeof _this.props.requestInterceptor === 'function') {
        return _this.props.requestInterceptor(req);
      }
      return req;
    };

    _this.responseInterceptor = function(res) {
      if (typeof _this.props.responseInterceptor === 'function') {
        return _this.props.responseInterceptor(res);
      }
      return res;
    };

    _this.onComplete = function() {
      if (typeof _this.props.onComplete === 'function') {
        return _this.props.onComplete(_this.system);
      }
    };

    _this.SwaggerUIComponent = null;
    _this.system = null;
    const {
      requestInterceptor,
      responseInterceptor,
      onComplete,
      ...otherProps
    } = this.props;
    _this.otherProps = otherProps;
    return _this;
  }

  (0, _createClass3.default)(SwaggerUI, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var ui = (0, _swaggerUi2.default)({
          requestInterceptor: this.requestInterceptor,
          responseInterceptor: this.responseInterceptor,
          onComplete: this.onComplete,
          ...this.otherProps,
        });

        this.system = ui;
        this.SwaggerUIComponent = ui.getComponent('App', 'root');

        this.forceUpdate();
      },
    },
    {
      key: 'render',
      value: function render() {
        return this.SwaggerUIComponent
          ? _react2.default.createElement(this.SwaggerUIComponent, null)
          : null;
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
          // flush current content
          this.system.specActions.updateSpec('');

          if (this.props.url) {
            // update the internal URL
            this.system.specActions.updateUrl(this.props.url);
            // trigger remote definition fetch
            this.system.specActions.download(this.props.url);
          }
        }

        if (this.props.spec !== prevProps.spec && this.props.spec) {
          if ((0, _typeof3.default)(this.props.spec) === 'object') {
            this.system.specActions.updateSpec(
              (0, _stringify2.default)(this.props.spec),
            );
          } else {
            this.system.specActions.updateSpec(this.props.spec);
          }
        }
      },
    },
  ]);
  return SwaggerUI;
})(_react2.default.Component);

exports.default = SwaggerUI;
