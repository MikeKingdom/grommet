'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.warn('Base icons are not deprecated, use raw svg with Icon component');
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-access-sign', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'access-sign');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M6.78342857,4.05397066 C6.19665306,4.25846046 5.32457143,4.8775625 4.68930612,5.54515434 C3.7795102,6.50344005 3.4564898,7.21413393 3.05804082,9.13609311 C2.91257143,9.83601148 2.37967347,11.4726645 2.11053061,12.0325013 C1.86808163,12.5438482 1.23820408,13.189889 0.489795918,13.701236 L0,14.0350319 L0.0754285714,14.3688278 C0.43077551,15.9354401 1.34595918,17.2921747 2.37967347,17.7819707 C3.0364898,18.0942156 3.03110204,18.0942156 3.4564898,17.5936441 C3.89804082,17.065889 4.52791837,16.5491543 4.99616327,16.3285013 C5.34073469,16.1614809 5.36228571,16.1614809 6.42269388,16.1293992 C7.51567347,16.0970727 7.94081633,16.0324196 8.61379592,15.8117666 C9.08204082,15.6557666 10.0834286,15.1441747 10.406449,14.8965829 C11.3701224,14.1535625 11.800898,12.5600115 11.1333061,12.2046645 C10.960898,12.1130727 10.5734694,12.129236 10.406449,12.2369911 C10.2502041,12.3393584 10.1103673,12.570787 10.1103673,12.7321747 C10.1103673,13.0336441 9.93281633,13.4159298 9.65804082,13.6850727 C9.28653061,14.0565829 8.90963265,14.2020523 8.22073469,14.2341339 C7.37559184,14.2826237 6.75110204,14.0242564 6.29338776,13.4426237 C5.37820408,12.285236 5.9164898,10.5302972 7.3324898,10.0941339 C7.80636735,9.94890944 8.57608163,9.97584821 9.03918367,10.1533992 C9.59363265,10.3632768 9.98130612,10.8156033 10.0782857,11.3646645 C10.1537143,11.773889 10.4066939,11.9891543 10.8051429,11.9891543 C11.0850612,11.9891543 11.3811429,11.7415625 11.4350204,11.4670319 C11.5266122,10.9826237 11.1497143,10.0779707 10.6542857,9.58278699 C10.1429388,9.07144005 9.50767347,8.78074617 8.5922449,8.6460523 C8.18840816,8.58678699 8.16146939,8.57601148 8.30693878,8.52752168 C8.39853061,8.50058291 8.7484898,8.47903189 9.08767347,8.47364413 C9.65828571,8.46825638 9.74987755,8.48441964 10.228898,8.65119515 C10.7025306,8.81282781 10.7725714,8.82360332 10.9665306,8.76433801 C11.3865306,8.64041964 11.5748571,8.10213393 11.3218776,7.75217475 C11.068898,7.40760332 10.2881633,7.14923597 9.34604082,7.10613393 C8.62995918,7.0738074 8.05934694,7.14384821 7.54261224,7.33217475 C7.35428571,7.39682781 7.20342857,7.4453176 7.20342857,7.43454209 C7.20342857,7.39144005 8.16710204,6.93397066 8.54938776,6.79388903 C8.77004082,6.7130727 9.20620408,6.59478699 9.50767347,6.52474617 C10.1537143,6.37413393 10.3045714,6.2933176 10.4174694,6.0295625 C10.5680816,5.66344005 10.3528163,5.21135842 9.97053061,5.10360332 C9.60979592,5.00123597 8.23714286,5.37813393 7.21959184,5.85201148 C6.57355102,6.15348087 5.92212245,6.59503189 5.42693878,7.06866454 C5.19012245,7.29470536 4.99616327,7.46172577 4.99616327,7.4455625 C4.99616327,7.35935842 5.41077551,6.78335842 5.69069388,6.48188903 C6.07836735,6.06188903 6.50889796,5.73886862 7.07436735,5.43739924 C7.32734694,5.30270536 7.56955102,5.1413176 7.61265306,5.07127679 C7.87640816,4.67282781 7.62881633,4.10221556 7.14955102,4.00523597 C7.07412245,3.9893176 6.9124898,4.01086862 6.78342857,4.05397066 Z M20.5760816,6.83184821 C20.1722449,7.40784821 19.6231837,7.94074617 19.1977959,8.17241964 L18.8586122,8.35535842 L17.5934694,8.38768495 C15.9837551,8.43078699 15.3700408,8.55446046 14.3902041,9.04450128 C13.2328163,9.62050128 12.7050612,10.2611543 12.5221224,11.3379707 C12.4682449,11.6717666 12.4682449,11.7256441 12.5652245,11.9085829 C12.6835102,12.129236 12.9582857,12.3124196 13.1789388,12.3124196 C13.5235102,12.3124196 13.8788571,11.9462972 13.8788571,11.5855625 C13.8788571,11.3379707 14.104898,10.9071952 14.3578776,10.6811543 C14.9500408,10.1482564 16.0915102,10.002787 16.8666122,10.3689094 C17.9649796,10.8802564 18.4278367,12.1184605 17.9272653,13.1952768 C17.5018776,14.0996849 16.6136327,14.5520115 15.5316735,14.4119298 C14.6919184,14.298787 14.1318367,13.9005829 13.9542857,13.2868686 C13.814449,12.7968278 13.7282449,12.6408278 13.5450612,12.5222972 C13.0714286,12.2316033 12.398449,12.6944605 12.5113469,13.2383788 C12.6673469,13.986787 12.9097959,14.4550319 13.3618776,14.8858074 C13.8788571,15.3866237 14.6270204,15.7096441 15.4452245,15.7902156 C16.0589388,15.8494809 15.7251429,15.9408278 14.8746122,15.9408278 C14.282449,15.9408278 14.126449,15.9246645 13.8516735,15.8222972 C13.264898,15.6016441 13.2056327,15.5908686 12.9849796,15.6609094 C12.6835102,15.7632768 12.5167347,16.0324196 12.5488163,16.3662156 C12.5595918,16.5116849 12.6134694,16.6676849 12.6727347,16.732338 C12.9149388,17.0014809 13.7169796,17.265236 14.5354286,17.3460523 C15.0039184,17.3891543 15.8490612,17.2921747 16.3280816,17.130787 C16.5379592,17.0607462 16.7157551,17.0122564 16.7211429,17.0230319 C16.7319184,17.0338074 16.5166531,17.152338 16.2367347,17.286787 C15.6661224,17.5667054 14.9392653,17.8142972 14.325551,17.9382156 C14.0941224,17.9867054 13.8519184,18.0621339 13.7872653,18.105236 C13.4534694,18.3205013 13.4103673,18.8911135 13.7118367,19.1602564 C13.9486531,19.3701339 14.0941224,19.3916849 14.6216327,19.2841747 C16.1235918,18.9880931 17.6042449,18.2558482 18.5676735,17.3352768 C18.9014694,17.0176441 18.9876735,16.9583788 18.9230204,17.0822972 C18.5676735,17.7768278 17.6955918,18.5896441 16.850449,19.0096441 C16.4142857,19.2302972 16.2475102,19.4296441 16.2475102,19.741889 C16.2475102,19.9948686 16.3444898,20.1726645 16.5651429,20.317889 C16.828898,20.4954401 17.0441633,20.473889 17.5234286,20.2209094 C18.4601633,19.7254809 19.3322449,18.9503788 19.881551,18.126787 C20.414449,17.3247462 20.6245714,16.7808278 20.8182857,15.6880931 C21.0443265,14.4229503 21.6903673,12.4309503 22.0349388,11.9303788 C22.3202449,11.5265421 23.0578776,10.9343788 23.7739592,10.5359298 C23.8976327,10.465889 24,10.3691543 24,10.3206645 C24,10.1700523 23.6769796,9.19560332 23.4886531,8.78637883 C23.0309388,7.77421556 22.3743673,7.03144005 21.6259592,6.67070536 C20.9044898,6.32025638 20.9368163,6.31486862 20.5760816,6.83184821 Z', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'AccessSign';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];