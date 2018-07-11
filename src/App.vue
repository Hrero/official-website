<template>
  <div id="app">
    <img class="min-top" src="../static/img/min-top.jpg">
    <ul class="linkListTop" :class="{Y0:linkListTop}">
      <li class="link1" @click="anchor(0)">
        <p>计划介绍</p>
      </li>
      <li class="link2" @click="anchor(1)">
        <p>学院特色</p>
      </li>
      <li class="link3" @click="anchor(2)">
        <p>书单安排</p>
      </li>
      <li class="link4" @click="anchor(3)">
        <p>学员评价</p>
      </li>
      <li class="link5" @click="anchor(4)">
        <p>我要读书</p>
      </li>
    </ul>
    <div id="header">
      <img class="logo" src="../static/img/headerLogo.png" />
      <div class="buttonBox">
        <div>
          <p>欢迎光临<br/>草莓书院</p>
          <button @click="scanQRcode=true">了解更多</button>
        </div>
      </div>
      <ul class="linkListBottom">
        <li class="link1" @click="anchor(0)">
          <p>计划介绍</p>
        </li>
        <li class="link2" @click="anchor(1)">
          <p>学院特色</p>
        </li>
        <li class="link3" @click="anchor(2)">
          <p>书单安排</p>
        </li>
        <li class="link4" @click="anchor(3)">
          <p>学员评价</p>
        </li>
        <li class="link5" @click="anchor(4)">
          <p>我要读书</p>
        </li>
      </ul>
    </div>
    <div id="body">
      <div class="introduceBox anchor">
        <p class="title introduceTitle"><span>计划介绍<br/></span>24本经典畅销书籍，横跨6大领域，每天只需花15分钟让你遇见一个，高情商、会处事、有底气的自己！</p>
        <div class="introduceWall" v-show="introduceWall">
          <div>
            <div>
              <img src="../static/img/introduce1.png" />
            </div>
            <p>180天阅读，相当于每天只需1元钱，还可以永久保存书籍，反复阅读学习。</p>
          </div>
          <div>
            <div>
              <img src="../static/img/introduce2.png" />
            </div>
            <p>无论是上下班坐车，还是睡前的15分钟，都可以随时随地在线阅读，解决了你认为自己没时间读书、不能坚持读书的困惑。</p>
          </div>
          <div>
            <div>
              <img src="../static/img/introduce3.png" />
            </div>
            <p>读书不仅可以获取知识，还可以社交。加入【草莓书院】班级群，结识好友，组队打卡，重返学生时代，享受共读的乐趣。</p>
          </div>
        </div>
        <div class="introduceWall" v-show="!introduceWall">
          <div class="swiper-container introduce-swiper-container" ref="introduceSwiper">
            <div class="swiper-wrapper introduce-swiper-wrapper">
              <div class="swiper-slide introduce-swiper-slide">
                <div>
                  <img src="../static/img/introduce1.png" />
                </div>
                <img class="introduceBk2" src="../static/img/introduceBk2.png">
                <img class="introduceBk3" src="../static/img/introduceBk3.png">
                <p>180天阅读，相当于每天只需1元钱，还可以永久保存书籍，反复阅读学习。</p>
              </div>
              <div class="swiper-slide introduce-swiper-slide">
                <div>
                  <img src="../static/img/introduce2.png" />
                </div>
                <p>无论是上下班坐车，还是睡前的15分钟，都可以随时随地在线阅读，解决了你认为自己没时间读书、不能坚持读书的困惑。</p>
              </div>
              <div class="swiper-slide introduce-swiper-slide">
                <div>
                  <img src="../static/img/introduce3.png" />
                </div>
                <img class="introduceBk1" src="../static/img/introduceBk1.png">
                <p>读书不仅可以获取知识，还可以社交。加入【草莓书院】班级群，结识好友，组队打卡，重返学生时代，享受共读的乐趣。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="introduce-pagination-block">
          <div v-for="(item, i) in 3" :key="i" :class="{pagination: i==introducePagination}" @click="introduceSwiperToPage(i)"></div>
        </div>
      </div>
      <div class="featureBox anchor">
        <p class="title"><span>学院特色<br/></span></p>
        <ul>
          <li>
            <svg id="onLine" class="on-line" viewBox="0 0 162 150">
              <g class="book">
                <path d="M 4 52 Q 5 42 17 42 H 60 Q 65 42 65 46 V 142 Q 65 146 60 146 H 17 Q 4 146 4 136 Z" />
                <line x1="15" y1="62" x2="54" y2="62" />
                <line x1="15" y1="82" x2="54" y2="82" />
                <line x1="15" y1="102" x2="54" y2="102" />
                <line x1="15" y1="122" x2="54" y2="122" />
              </g>
              <g class="book" style="transform-origin: 65px 93px;transform: rotateY(180deg);">
                <path d="M 4 52 Q 5 42 17 42 H 60 Q 65 42 65 46 V 142 Q 65 146 60 146 H 17 Q 4 146 4 136 Z" />
                <line x1="54" y1="62" x2="15" y2="62" />
                <line x1="54" y1="82" x2="15" y2="82" />
                <line x1="54" y1="102" x2="15" y2="102" />
                <line x1="54" y1="122" x2="15" y2="122" />
              </g>
              <g class="sign">
                <path d="M 140 22 Q 145 22 145 27">
                  <animate attributeName="opacity" attribute="xml" from="0" to="1" begin="onLine.mouseenter" dur=".3s" />
                </path>
                <path d="M 140 15 Q 153 15 153 27">
                  <animate attributeName="opacity" attribute="xml" from="0" to="1" begin="onLine.mouseenter+.3s" dur=".3s" />
                </path>
                <path d="M 140 8 Q 161 6 161 27">
                  <animate attributeName="opacity" attribute="xml" from="0" to="1" begin="onLine.mouseenter+.6s" dur=".3s" />
                </path>
              </g>
            </svg>
            <p>在线阅读</p>
          </li>
          <li>
            <svg id="review" class="review" viewBox="0 0 129 130">
              <g>
                <path d="M 55 107 H 12 Q 4 107 4 100 V 11 Q 4 4 12 4 H 69 L 103 37 V 56" style="stroke-linecap:round;" />
                <g>
                  <line x1="16" y1="28" x2="55" y2="28" style="stroke-width:6px;" />
                  <line x1="16" y1="46" x2="55" y2="46" style="stroke-width:6px;" />
                  <line x1="16" y1="65" x2="55" y2="65" style="stroke-width:6px;" />
                  <line x1="16" y1="83" x2="55" y2="83" style="stroke-width:6px;" />
                </g>
                <path d="M 64 4 V 30 Q 69 37 77 37 H 103"/>
              </g>
              <g>
                <circle cx="89" cy="91" r="22" style="fill:transparent;" />
                <polyline points="72 93 80 93 86 85 92 98 98 91 106 91" style="stroke-width:1px;">
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,49.5375" to="49.5375,0" begin="review.mouseenter" dur="1s" restart="whenNotActive" />
                </polyline>
                <line x1="105" y1="107" x2="127" y2="129" style="stroke-width: 6px" />
              </g>
            </svg>
            <p>复习</p>
          </li>
          <li>
            <svg id="test" class="test" viewBox="0 0 131 126">
              <g>
                <path d="M 60 109 H 10 Q 4 109 4 102 V 32 Q 4 25 10 25 H 103 Q 111 25 111 32 V 53 H 4" style="stroke-linecap:round;stroke-linejoin: round;" />
                <line x1="30" y1="5" x2="30" y2="43" style="stroke-width:10px;stroke-linecap:round;" />
                <line x1="80" y1="5" x2="80" y2="43" style="stroke-width:10px;stroke-linecap:round;" />
                <line x1="20" y1="73" x2="55" y2="73" style="stroke-width:6px;stroke-linecap:round;" />
                <line x1="20" y1="92" x2="55" y2="92" style="stroke-width:6px;stroke-linecap:round;" />
              </g>
              <g>
                <path d="M 127 92 A 26 26 0 1 1 113 71" style="stroke-linecap:round;">
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,143" to="143,0" begin="test.mouseenter" dur=".5s" />
                </path>
                <polyline points="92 92 101 100 125 77" style="stroke-linecap:round;">
                  <animate attributeName="stroke-linecap" attribute="xml" from="butt" to="butt" begin="test.mouseenter" dur=".5s" />
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,50" to="0,50" begin="test.mouseenter" dur=".5s" />
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,50" to="50,0" begin="test.mouseenter+.5s" dur=".5s" />
                </polyline>
              </g>
            </svg>
            <p>周测</p>
          </li>
        </ul>
        <ul>
          <li>
            <svg id="system" class="system" viewBox="0 0 137 140">
              <path class="fill" d="M 86 140 H 18 Q 0 140 0 125 V 13 Q 0 0 14 0 H 104 Q 116 0 116 13 V 68 H 113 L 95 51 Q 85 46 75 51 L 48 78 Q 42 87 48 98 L 68 119 V 122 H 10 Q 7 125 10 127 M 10 127 Q 17 132 19 133 H 82 L 86 136 V 140" />
              <g>
                <path d="M 100 133 L 66 99 Q 60 91 66 84 L 80 69 Q 88 63 97 69 L 130 103 Q 135 110 130 118 L 116 133 Q 108 139 100 133 Z" />
                <line x1="84" y1="87" x2="95" y2="98" style="stroke-linecap:round;" />
                <animateTransform  attributeName="transform" type="rotate" values="0 126 129;4 126 129;-4 126 129;2 126 129;-2 126 129;0 126 129" begin="system.mouseenter" dur=".4s" restart="whenNotActive" />
              </g>
            </svg>
            <p>学员制度</p>
          </li>
          <li>
            <svg id="promote" class="promote" viewBox="0 0 128 118">
              <g>
                <path d="M 4 4 V 106 Q 4 113 12 113 H 113" style="stroke-linecap:round;" />
                <circle class="fill" cx="125" cy="113" r="3" />
              </g>
              <g>
                <defs>
                  <clipPath id="rect">
                    <polygon points="83 13 97 13 90 0" style="transform:rotate(36deg);transform-origin:90px 13px;" />
                  </clipPath>
                </defs>
                <polyline points="25 52 52 27 69 38 90 13" style="stroke-linecap:round;">
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,92" to="92,0" begin="promote.mouseenter" dur=".9s" />
                </polyline>
                <line x1="90" y1="13" x2="98" y2="2" style="stroke-width:14px;" clip-path="url(#rect)">
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,14" to="0,14" begin="promote.mouseenter" dur=".9s" />
                  <animate attributeName="stroke-dasharray" attribute="xml" from="0,14" to="14,0" begin="promote.mouseenter+.9s" dur=".1s" />
                </line>
                <line x1="31" y1="100" x2="31" y2="66" style="stroke-width: 5px;stroke-linecap:round;">
                  <animate attributeName="y2" attribute="xml" from="100" to="66" begin="promote.mouseenter" dur=".2s" />
                </line>
                <line x1="54" y1="100" x2="54" y2="59" style="stroke-width: 5px;stroke-linecap:round;">
                  <animate attributeName="stroke-linecap" attribute="xml" from="butt" to="butt" begin="promote.mouseenter" dur=".2s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="100" begin="promote.mouseenter" dur=".2s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="59" begin="promote.mouseenter+.2s" dur=".2s" />
                </line>
                <line x1="76" y1="100" x2="76" y2="52" style="stroke-width: 5px;stroke-linecap:round;">
                  <animate attributeName="stroke-linecap" attribute="xml" from="butt" to="butt" begin="promote.mouseenter" dur=".4s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="100" begin="promote.mouseenter" dur=".4s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="52" begin="promote.mouseenter+.4s" dur=".3s" />
                </line>
                <line x1="98" y1="100" x2="98" y2="45" style="stroke-width: 5px;stroke-linecap:round;">
                  <animate attributeName="stroke-linecap" attribute="xml" from="butt" to="butt" begin="promote.mouseenter" dur=".7s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="100" begin="promote.mouseenter" dur=".7s" />
                  <animate attributeName="y2" attribute="xml" from="100" to="45" begin="promote.mouseenter+.7s" dur=".3s" />
                </line>
              </g>
            </svg>
            <p class="anchor">阶段提升</p>
          </li>
          <li>
            <svg id="summarize" class="summarize" viewBox="0 0 154 154">
              <g>
                <polygon points="18 53 77 86 136 53 77 17" />
                <path d="M 40 67 V 124 Q 40 139 56 139 H 97 Q 114 139 114 124 V 84" style="stroke-linecap:round;" />
                <line x1="134" y1="74" x2="134" y2="100" style="stroke-linecap:round;" />
                <circle class="fill" cx="134" cy="111" r="3">
                  <animate attributeName="r" attributt="xml" values="3;5;3" begin="summarize.mouseenter" repeatCount="2" dur=".4s" restart="whenNotActive" />
                </circle>
              </g>
            </svg>
            <p>毕业总结</p>
          </li>
        </ul>
      </div>
      <div class="bookBox">
        <p class="title"><span>书单安排<br/></span>精学24本书经典好书，全方位提升六大能力</p>
        <ul class="maxBook">
          <li>
            <div>高情商：</div>
            <div>《做情绪的主人，才能做生活的主角》、《别让小情绪害了你》、《化解冲突：自我管理系列丛书》、《宽心、舍得、淡定》</div>
          </li>
          <li>
            <div>会说话：</div>
            <div>《沟通的艺术：看入人里，看出人外》、《关键对话：如何高效能沟通》、《职场说话技巧》、《非暴力沟通》</div>
          </li>
          <li>
            <div>合家欢：</div>
            <div>《男人需要尊重  女人需要爱》、《亲密关系：通往灵魂的桥梁》、《正面管教》、《快节奏  慢生活》</div>
          </li>
          <li>
            <div>赢职场：</div>
            <div>《精力管理》、《刻意练习》、《高效能人士的七个习惯》、《影响力》</div>
          </li>
          <li>
            <div>懂赚钱：</div>
            <div>《富爸爸  穷爸爸》、《牛奶可乐经济学》、《无价》、《小狗钱钱》</div>
          </li>
          <li>
            <div>有涵养：</div>
            <div>《人类简史》、《人间词话》、《跟随南环瑾，品读诸子百家》、《一生不可不读的27部国学经典》</div>
          </li>
        </ul>
        <div class="minBook">
          <ul>
            <li>
              <div>高情商：</div>
              <div>《做情绪的主人，才能做生活的主角》、<br/>《别让小情绪害了你》、<br/>《化解冲突：自我管理系列丛书》、<br/>《宽心、舍得、淡定》</div>
            </li>
            <li>
              <div>会说话：</div>
              <div>《沟通的艺术：看入人里，看出人外》、<br/>《关键对话：如何高效能沟通》、<br/>《职场说话技巧》、<br/>《非暴力沟通》</div>
            </li>
            <li>
              <div>合家欢：</div>
              <div>《男人需要尊重  女人需要爱》、<br/>《亲密关系：通往灵魂的桥梁》、<br/>《正面管教》、<br/>《快节奏  慢生活》</div>
            </li>
            <li>
              <div>赢职场：</div>
              <div>《精力管理》、<br/>《刻意练习》、<br/>《高效能人士的七个习惯》、<br/>《影响力》</div>
            </li>
            <li>
              <div>懂赚钱：</div>
              <div>《富爸爸  穷爸爸》、<br/>《牛奶可乐经济学》、<br/>《无价》、<br/>《小狗钱钱》</div>
            </li>
            <li>
              <div>有涵养：</div>
              <div>《人类简史》、<br/>《人间词话》、<br/>《跟随南环瑾，品读诸子百家》、<br/>《一生不可不读的27部国学经典》</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="evaluateBox">
        <p class="title anchor">看看学员们都在说什么？</p>
        <div class="swiper-container evaluate-swiper-container" ref="swiper">
          <div class="swiper-wrapper evaluate-swiper-wrapper">
            <div class="swiper-slide evaluate-swiper-slide" v-for="(item, i) in evaluateList" :key="i">
              <div class="userBlock">
                <p class="evaluateText">{{item.text}}</p>
                <div class="userBox">
                  <img :src="item.img" />
                  <p class="userName">{{item.name}}</p>
                  <p class="userClass">{{item.class}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-black"></div>
          <div class="swiper-button-next swiper-button-black"></div>
        </div>
        <div class="evaluate-pagination-block">
          <div v-for="(item, i) in 3" :key="i" :class="{pagination: i==evaluatePagination}" @click="evaluateSwiperToPage(i)"></div>
        </div>
      </div>
      <div class="generalizeBox anchor">
        <svg viewBox="0,0,860,785">
          <g style="transform-origin:429px 410px;transform:rotate(-30deg)">
            <ellipse cx="429" cy="410" rx="204" ry="355" class="ellipse" />
            <circle cx="225" cy="410" r="4" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 408 0 M 408 0 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="633" cy="410" r="3" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 -408 0 M -408 0 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <g style="transform-origin:394px 313px;transform:rotate(70deg)">
            <ellipse cx="394" cy="313" rx="204" ry="355" class="ellipse" />
            <circle cx="394" cy="-42" r="4" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 0 0 710 M 0 710 A 204 355 0 1 0 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="394" cy="668" r="3" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 0 -710 M 0 -710 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <g style="transform-origin:412px 391px;transform:rotate(20deg)">
            <ellipse cx="412" cy="391" rx="204" ry="355" class="ellipse" />
            <circle cx="208" cy="391" r="4" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 408 0 M 408 0 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="412" cy="746" r="3" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 0 0 -710 M 0 -710 A 204 355 0 1 0 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <g style="transform-origin:445px 492px;transform:rotate(45deg)">
            <ellipse cx="445" cy="492" rx="204" ry="355" class="ellipse" />
            <circle cx="445" cy="137" r="4" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 0 710 M 0 710 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="649" cy="492" r="3" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 0 -408 0 M -408 0 A 204 355 0 1 0 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <g style="transform-origin:463px 463px;transform:rotate(100deg)">
            <ellipse cx="463" cy="463" rx="204" ry="355" class="ellipse" />
            <circle cx="463" cy="818" r="4" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 1 0 -710 M 0 -710 A 204 355 0 1 1 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="667" cy="463" r="3" style="fill:#29d9ca;">
              <animateMotion path="M 0 0 A 204 355 0 0 0 -408 0 M -408 0 A 204 355 0 1 0 0 0" begin="0s" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
        <p class="generalizeTitle">限时优惠特价</p>
        <p class="generalizePrice">￥<span>199</span></p>
        <p class="originalPrice"><i>原价：<del>499</del></i></p>
        <button @click="scanQRcode=true">我要读书</button>
      </div>
      <div class="bottomBox">
        <p>@2018 All Right Reserved. lansha.com.</p>
      </div>
    </div>
    <el-dialog
      class="scanQRcode"
      :show-close="false"
      :visible.sync="scanQRcode">
      <div>
        <img src="../static/img/QRcode.png" />
        <p>使用微信扫一扫<br/>关注公众号后报名</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import evaluateList from './common/evaluateList'
export default {
  name: 'App',
  data () {
    return {
      evaluateSwiper: null, // swiper
      evaluatePagination: 0,
      introduceSwiper: null, // swiper
      introducePagination: -1,
      linkListTop: false,
      anchorSwitch: true,
      introduceWall: true,
      scanQRcode: false,
      evaluateList: evaluateList
    }
  },
  methods: {
    introduceSwiperToPage (index) {
      if (index !== this.introducePagination) {
        this.introduceSwiper.slideToLoop(index)
      }
    },
    _introduceSwiperInit () {
      let the = this
      let config = {
        loop: true,
        loopAdditionalSlides: 1,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: '7.30769%',
        on: {
          slideChangeTransitionStart () {
            if (the.introducePagination === -1) {
              the.introducePagination = 0
            } else {
              the.introducePagination = this.realIndex
            }
          }
        }
      }
      this.introduceSwiper = new this.$swiper(this.$refs.introduceSwiper, config)
    },
    evaluateSwiperToPage (index) {
      this.evaluateSwiper.slideTo(index)
    },
    _evaluateSwiperInit () {
      let the = this
      let config = {
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionStart () {
            the.evaluatePagination = this.activeIndex
          }
        }
      }
      this.evaluateSwiper = new this.$swiper(this.$refs.swiper, config)
    },
    scroll (height, $) {
      if (height - $(document).scrollTop() <= 0) {
        this.linkListTop = true
      } else {
        this.linkListTop = false
      }
    },
    anchor (index) {
      if (this.anchorSwitch) {
        this.anchorSwitch = false
        let $ = this.$j
        let top = $('.anchor:eq(' + index + ')').offset().top
        if (index === 3) {
          if ($(window).width() <= 1030) {
            top -= 30
          } else if ($(window).width() <= 1300) {
            top -= 50
          } else {
            top -= 100
          }
        } else if (index === 1) {
          if ($(window).width() >= 1560) {
            top += 100
          } else {
            top -= 100
          }
        } else if (index === 2) {
          top += 50
        }
        let recordIspeed = null
        let timer = setInterval(() => {
          let currentTop = $(document).scrollTop()
          let distances = top - currentTop
          let ispeed = Math.floor(distances / 10)
          if (ispeed === recordIspeed) {
            $(document).scrollTop(currentTop + parseInt(distances))
            this.anchorSwitch = true
            clearInterval(timer)
          } else {
            $(document).scrollTop(currentTop + ispeed)
          }
          recordIspeed = ispeed
        }, 10)
      }
    }
  },
  created () {
  },
  mounted () {
    let $ = this.$j
    let the = this
    let height = $(window).height()
    $('#loading').addClass('loading')
    setTimeout(() => {
      $('#loading').remove()
    }, 3000)
    setTimeout(() => {
      $('html').css('overflowY', 'auto')
    }, 2500)
    $(() => {
      if ($(window).width() > 960) {
        $('#app').css('paddingTop', height + 'px')
        $('#body').css('marginTop', height + 'px')
        the.scroll(height, $)
      }
      if ($(window).width() < 1560) {
        the.introduceWall = false
      } else {
        the.introduceWall = true
      }
    })
    $(window).resize(() => {
      if ($(window).width() > 960) {
        let height = $(window).height()
        $('#app').css('paddingTop', height + 'px')
        $('#body').css('marginTop', height + 'px')
      } else {
        $('#app').css('paddingTop', '0px')
        $('#body').css('marginTop', '0px')
      }
      if ($(window).width() < 1560) {
        the.introduceWall = false
      } else {
        the.introduceWall = true
      }
    })
    $(window).scroll(() => {
      if ($(window).width() > 960) {
        the.scroll(height, $)
      }
    })
    the._evaluateSwiperInit()
    the._introduceSwiperInit()
  }
}
</script>

<style lang="sass">
@import 'common/css/basis'
@media screen and (min-width: 961px)
  @import 'style/maxStyle'
@media screen and (max-width: 960px)
  @import 'style/minStyle'
body
  font-size: 100px
#app
  font-family: 'Microsoft YaHei', 'SimSun', 'SimHei'
.loading
  animation: myfirst 1s
  animation-delay: 2s
  animation-fill-mode: forwards
@keyframes myfirst
  from
    opacity: 1
  to
    opacity: 0
</style>
