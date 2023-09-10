<template>
  <div
    ref="wrap"
    :class="modernBrowser ? 'justify-space' : 'justify-center'"
    class="input-wrap otp-box"
  >
    <template v-if="modernBrowser">
      <template v-for="(char, index) in valueParts" :key="index">
        <input
          :autofocus="index === 0"
          v-bind="$attrs"
          v-model="valueParts[index]"
          @keydown="handleEnterKey($event); handleKeyDown($event, index)"
          @input="handleInput($event, index)"
          @paste="onPaste"
          :type="type"
          onkeypress="if(value === 0 || value.length===1) return false;"
          class="box "
          :class="checkValue(valueParts[index])"
          size="large"
          maxlength="1"
        />
      </template>
    </template>
    <input
      v-else
      @keydown="handleEnterKey($event)"
      v-bind="$attrs"
      :value="value"
      :type="type"
      :maxlength="CODE_LENGTH"
      :onkeypress="'if(value.length===' + CODE_LENGTH + ') return false;'"
      class="fallback"
      size="lg"
    />
  </div>
</template>

<script>
const CODE_LENGTH = 4;
const modernBrowser = true; // removed detection dependenncy
export default {  
//   inheritAttrs: modernBrowser,
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: 'number'
    }
  },
  data() {
    return {
      modernBrowser,
      CODE_LENGTH,
      valueParts: _fill([], "", CODE_LENGTH),
      // delimiter: CODE_LENGTH / 2 - 1,
      protect: false, // multipress protection
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      };
    },
    
  },
  watch: {
    valueParts() {
        this.emitInput();
    },
  },
  mounted() {
    if (this.$el.attributes.autofocus) {
      this.focus(0);
    }
    console.log('inside the new otp field')
  },
  methods: {
    checkValue(data) {
      if(data || data === 0) {
        return 'box-bg-white'
      } else {
        return 'box-no-data'
      }
    },

    focus(index) {
      if (index > this.delimiter) {
        index++;
      }
      const inp = this.$refs.wrap.children[index];
      if (inp) {
        inp.focus();
      }
    },
    handleEnterKey(event) {
 
      if (event.key === 'Enter') {
        this.$emit('enter');
        event.stopPropagation();
      }       
    },
    handleKeyDown(event, index) {
      // handle "Unindentified" as undefined
      const key = _sanitizeEventKey(event.key);
      if (!key) {
        return;
      } else if (key === "Backspace") {
        if (this.valueParts[index] || this.valueParts[index]===0) {
          // console.log('this.valueParts[index]',this.valueParts[index]);
          return (this.valueParts[index] = "");
        }
        this.focus(index - 1);
        // console.log('index',index);
      } else if (
        !event.shiftKey &&
        (key === "ArrowRight" || key === "Right")
      ) {
        this.focus(index + 1);
      } else if (
        !event.shiftKey &&
        (key === "ArrowLeft" || key === "Left")
      ) {
        this.focus(index - 1);
      } else if (key.length === 1 && this.valueParts[index]) {
        this.valueParts[index] = key;
        this.$forceUpdate();
        this.focus(index + 1);
        this.emitInput();
      }
    },
    handleInput(event, index) {
      const value = this.valueParts[index];
      if (value || value === 0) {
        if (value.length > 1) {
          this.valueParts[index] = value[value.length -1];
        }
        this.focus(index + 1);
      }
      this.emitInput();
    },
    onPaste(event) {
      const clipboardData =
        event.clipboardData || window.clipboardData;
      if (!clipboardData) {
        return;
      }
      // IE fix
      event.preventDefault();
      const code =
        clipboardData.getData("Text") || clipboardData.getData("text/plain");
      this.fillCode(code);
    },
    fillCode(code) {
      code = code.trim();
      code = code.slice(0, CODE_LENGTH);
      const parts = code.split("");
      parts.length = CODE_LENGTH;
      this.valueParts = parts;
      const last = code.length - 1;
      setTimeout(() => {
        // cut out extra chars from last input
        this.valueParts[last] =
          this.valueParts[last] && this.valueParts[last].slice(0, 1); // apply just first char
        this.$forceUpdate();
        this.focus(last);
      }, 0);
    },
    emitInput() {
      const result = this.valueParts.join("").slice(0, CODE_LENGTH);
      this.$emit("updateValue", result);
      // console.log('result',CODE_LENGTH);
    },
  },
};
function _fill(arr, val, l) {
  arr.length = l;
  arr.fill(val, 0, l);
  return arr;
}
function _sanitizeEventKey(key) {
  return key === "Unidentified" ? undefined : key;
}




</script> 
<style scoped>
.input-wrap {
  display: flex;
  align-items: center;
  margin: 2rem 0.5rem;
}
.justify-space {
  /* justify-content: space-between; */
}
.justify-center {
  justify-content: center;
}
.box, .fallback {
  display: inline-block;
  height: 3.6rem !important;
  text-align: center;
  font-size: 200%;
}
.box {
  width: 3.6rem;
  padding: 0.3rem;
  box-shadow: 0 0 10px rgba(83, 83, 83, 0.09);
  border-radius: 10px;
  background-color: #485f84 ;
  border: none;
  margin-right: 8px;
}
.box-bg-white{
   background: #ffff;
}
.box-no-data{
  background-color: #485f84 ;
}
.box:focus {
  background: #ffff;
}
.fallback {
  max-width: 14rem;
  letter-spacing: 1rem;
}
@media only screen and (max-width: 480px) {
  .box {
  width: 38px !important;
  height: 38px !important;
}
}
</style>