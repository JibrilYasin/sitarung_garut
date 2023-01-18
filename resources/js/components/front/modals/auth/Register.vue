<template>
  <div class="modal fade" id="registerModal" data-bs-backdrop="static">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Form Pendaftaran</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="registerForm" @submit.prevent="submitFormRegister" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="py-3 text-center">
              <img :src="$parent.baseurl+'/images/icons/register.png'" width="150" alt="" />
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Nama</label>
              <input type="text" id="nameRegisterInput" class="form-control" :class="formErrors['nameRegisterInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['nameRegisterInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['nameRegisterInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Alamat</label>
              <textarea id="addressRegisterInput" class="form-control" :class="formErrors['addressRegisterInput']?'is-invalid':''"></textarea>
              <div class="invalid-feedback" v-if="formErrors['addressRegisterInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['addressRegisterInput'][0] }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> Email</label>
                <input id="emailRegisterInput" type="text" class="form-control" :class="formErrors['emailRegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['emailRegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['emailRegisterInput'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> No Telepon</label>
                <input id="phoneRegisterInput" type="text" class="form-control" :class="formErrors['phoneRegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['phoneRegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['phoneRegisterInput'][0] }}
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">No KTP</label>
                <input id="ktpNORegisterInput" type="text" class="form-control" maxlength="16" :class="formErrors['ktpNORegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['ktpNORegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['ktpNORegisterInput'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label">Foto KTP</label>
                <input id="ktpRegisterInput" class="form-control" type="file" :class="formErrors['ktpRegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['ktpRegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['ktpRegisterInput'][0] }}
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">No NPWP</label>
                <input id="npwpNORegisterInput" type="text" class="form-control" maxlength="16" :class="formErrors['npwpNORegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['npwpNORegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['npwpNORegisterInput'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label">Foto NPWP</label>
                <input id="npwpRegisterInput" class="form-control" type="file" :class="formErrors['npwpRegisterInput']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['npwpRegisterInput']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['npwpRegisterInput'][0] }}
                </div>
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label"><sup class="text-danger">(*)</sup> Password <code>( Kombinasi Huruf Kapital, Huruf Kecil & Angka )</code></label>
              <div style="position: relative;">
                <input type="password" class="form-control" id="passwordRegisterInput" :class="formErrors['passwordRegisterInput']?'is-invalid':''" v-model="passwordValue"/>
                <a id="showHidePassword" href="javascript:void(0)" v-on:click="showPassword('passwordRegisterInput')">
                  <span style="position: absolute; top: 10px; right: 15px; font-size: 1rem;"><i class="bx" :class="showHidepassword"></i></span>
                </a>
              </div>
              <div class="invalid-feedback d-block" v-if="formErrors['passwordRegisterInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['passwordRegisterInput'][0] }}
              </div>
              <password-meter :password="passwordValue" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn bg-gradient-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import { useToast,TYPE } from "vue-toastification"
  import passwordMeter from "vue-simple-password-meter"
  export default defineComponent({
    name : 'RegisterModal',
    data(){
      return{
        formErrors: {},
        showHidepassword:'bx-hide'
      }
    },
    components: { passwordMeter },
    setup () {
      const toast = useToast();
      const passwordValue = ref('');
      return {toast,passwordValue}
    },
    methods:{
      showModal(){
        this.formErrors = {}
        $("#registerModal").modal('show')
        this.passwordValue = '';
        $("#registerForm")[0].reset()
      },
      showPassword(param) {
        var x = document.getElementById(param);
        if (x.type === "password") {
          x.type = "text";
          this.showHidepassword = 'bx-show-alt'
        } else {
          x.type = "password";
          this.showHidepassword = 'bx-hide'
        }
      },
      submitFormRegister(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/register";
        let datas = new FormData();
        datas.append("nameRegisterInput", $("#nameRegisterInput").val());
        datas.append("addressRegisterInput", $("#addressRegisterInput").val());
        datas.append("emailRegisterInput", $("#emailRegisterInput").val());
        datas.append("phoneRegisterInput", $("#phoneRegisterInput").val());
        datas.append("passwordRegisterInput", $("#passwordRegisterInput").val());
        datas.append("ktpNORegisterInput", $("#ktpNORegisterInput").val());
        if(document.getElementById("ktpRegisterInput").files[0]){
          datas.append("ktpRegisterInput", document.getElementById("ktpRegisterInput").files[0]);
        }
        datas.append("npwpNORegisterInput", $("#npwpNORegisterInput").val());
        if(document.getElementById("npwpRegisterInput").files[0]){
          datas.append("npwpRegisterInput", document.getElementById("npwpRegisterInput").files[0]);
        }
        datas.append("registerViaRegisterInput", 'Website');
        axios
          .post(action, datas, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            this.toast(resp.message, {
                type: resp.status,
                timeout: 5000
            });
            if (resp.status == "success") {
              $("#registerModal").modal('hide');
              this.$parent.showLoginModal();
            }

            this.$isLoading(false)
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$isLoading(false)
          });
      }
    }
  });
</script>
