<template>
  <div class="modal fade" id="profileModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Pengaturan Profil</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="profileForm" @submit.prevent="submitFormProfile" class="mb-3" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
          <div class="modal-body">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/profile.png'" width="180" alt="" />
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Nama</label>
              <input type="text" id="nameProfileInput" class="form-control" :class="formErrors['nameProfileInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['nameProfileInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['nameProfileInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Alamat</label>
              <textarea id="addressProfileInput" class="form-control" :class="formErrors['addressProfileInput']?'is-invalid':''"></textarea>
              <div class="invalid-feedback" v-if="formErrors['addressProfileInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['addressProfileInput'][0] }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> Email</label>
                <input id="email" type="text" class="form-control" :class="formErrors['email']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['email']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['email'][0] }}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label"><sup class="text-danger">(*)</sup> No Telepon</label>
                <input id="phone" type="text" class="form-control" :class="formErrors['phone']?'is-invalid':''"/>
                <div class="invalid-feedback" v-if="formErrors['phone']">
                  <i class="bx bx-x"></i>
                  {{ formErrors['phone'][0] }}
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <a :href="ktpProfile" data-featherlight="image">
                        <div class="mt-2 w-100" :style="{backgroundImage: 'url('+ktpProfile+')'}" style="height: 120px; background-position: center; background-size: cover;"></div>
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="mb-2">
                        <label class="form-label">No KTP</label>
                        <input id="ktp_no" type="text" class="form-control" maxlength="16" :class="formErrors['ktp_no']?'is-invalid':''"/>
                        <div class="invalid-feedback" v-if="formErrors['ktp_no']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['ktp_no'][0] }}
                        </div>
                      </div>
                      <div class="mb-0">
                        <label class="form-label">Foto KTP</label>
                        <input id="ktpProfileInput" class="form-control" type="file" :class="formErrors['ktpProfileInput']?'is-invalid':''"/>
                        <div class="invalid-feedback" v-if="formErrors['ktpProfileInput']">
                          <i class="bx bx-x"></i>
                          {{ formErrors['ktpProfileInput'][0] }}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-4">
                    <a :href="npwpProfile" data-featherlight="image">
                      <div class="mt-2 w-100" :style="{backgroundImage: 'url('+npwpProfile+')'}" style="height: 120px; background-position: center; background-size: cover;"></div>
                    </a>
                  </div>
                  <div class="col-md-8">
                    <div class="mb-2">
                      <label class="form-label">No NPWP</label>
                      <input id="npwp_no" type="text" class="form-control" maxlength="16" :class="formErrors['npwp_no']?'is-invalid':''"/>
                      <div class="invalid-feedback" v-if="formErrors['npwp_no']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['npwp_no'][0] }}
                      </div>
                    </div>
                    <div class="mb-0">
                      <label class="form-label">Foto NPWP</label>
                      <input id="npwpProfileInput" class="form-control" type="file" :class="formErrors['npwpProfileInput']?'is-invalid':''"/>
                      <div class="invalid-feedback" v-if="formErrors['npwpProfileInput']">
                        <i class="bx bx-x"></i>
                        {{ formErrors['npwpProfileInput'][0] }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ProfileModal',
    data(){
      return{
        getData:{},
        ktpProfile:'',
        npwpProfile:'',
        formErrors: {}
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(data){
        this.getData = data;
        this.formErrors = {}
        $("#profileModal").modal('show')
        $("#profileForm")[0].reset()
        $("#nameProfileInput").val(data.name)
        $("#addressProfileInput").val(data.address)
        $("#email").val(data.email)
        $("#phone").val(data.phone)
        $("#ktp_no").val(data.ktp_no)
        if(data.ktp){
          this.ktpProfile = imagepath+'/'+data.ktp
        }else{
          this.ktpProfile = imagepath+'noimage.png'
        }
        $("#npwp_no").val(data.npwp_no)
        if(data.npwp){
          this.npwpProfile = imagepath+'/'+data.npwp
        }else{
          this.npwpProfile = imagepath+'noimage.png'
        }
      },
      submitFormProfile(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/account/profile";
        let datas = new FormData();
        datas.append("id", this.getData['id']);
        datas.append("access", this.getData['user_access']);
        datas.append("statusProfileInput", this.getData['status']);
        datas.append("nameProfileInput", $("#nameProfileInput").val());
        datas.append("addressProfileInput", $("#addressProfileInput").val());
        datas.append("email", $("#email").val());
        datas.append("phone", $("#phone").val());
        datas.append("ktp_no", $("#ktp_no").val());
        if(document.getElementById("ktpProfileInput").files[0]){
          datas.append("ktpProfileInput", document.getElementById("ktpProfileInput").files[0]);
        }
        datas.append("npwp_no", $("#npwp_no").val());
        if(document.getElementById("npwpProfileInput").files[0]){
          datas.append("npwpProfileInput", document.getElementById("npwpProfileInput").files[0]);
        }
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setToken}`;
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
              $("#profileModal").modal('hide');
              this.$store.dispatch("setProfile", { self: this });
            }

            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false);
            if (error.response.status == 422) {
              this.formErrors = error.response.data.errors;
            } else {
              this.$store.dispatch("removeDispatch", { self: this });
            }
          });
      }
    }
  };
</script>
