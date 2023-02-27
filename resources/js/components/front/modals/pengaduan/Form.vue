<template>
  <div class="modal fade" id="pengaduanModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Form Pengaduan</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <form id="loginForm" @submit.prevent="submitFormPengaduan" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="py-4 text-center">
              <img :src="$parent.baseurl+'/images/icons/pengaduan.png'" width="150" alt="" />
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Nama</label>
              <input type="text" class="form-control" id="pengaduanNameInput" name="pengaduanNameInput" :class="formErrors['pengaduanNameInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['pengaduanNameInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['pengaduanNameInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Telepon</label>
              <input type="text" class="form-control" id="pengaduanPhoneInput" name="pengaduanPhoneInput" :class="formErrors['pengaduanPhoneInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['pengaduanPhoneInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['pengaduanPhoneInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Judul</label>
              <input type="text" class="form-control" id="pengaduanTitleInput" name="pengaduanTitleInput" :class="formErrors['pengaduanTitleInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['pengaduanTitleInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['pengaduanTitleInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"><sup class="text-danger">(*)</sup> Isi Pengaduan</label>
              <textarea class="form-control" id="pengaduanContentInput" name="pengaduanContentInput" :class="formErrors['pengaduanContentInput']?'is-invalid':''"></textarea>
              <div class="invalid-feedback" v-if="formErrors['pengaduanContentInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['pengaduanContentInput'][0] }}
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label"><sup class="text-danger">(*)</sup> Foto</label>
              <input id="pengaduanFileInput" class="form-control" type="file" :class="formErrors['pengaduanFileInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['pengaduanFileInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['pengaduanFileInput'][0] }}
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
    name : 'pengaduanModal',
    data(){
      return{
        formErrors: {}
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(){
        this.formErrors = {}
        $("#pengaduanModal").modal('show')
        $("#loginForm")[0].reset()
      },
      submitFormPengaduan(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        let action = baseurl + "/api/pengaduan";
        let datas = new FormData();
        datas.append("pengaduanNameInput", $("#pengaduanNameInput").val());
        datas.append("pengaduanPhoneInput", $("#pengaduanPhoneInput").val());
        datas.append("pengaduanTitleInput", $("#pengaduanTitleInput").val());
        datas.append("pengaduanContentInput", $("#pengaduanContentInput").val());
        datas.append("pengaduanFileInput", document.getElementById("pengaduanFileInput").files[0]);
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
              $("#pengaduanModal").modal('hide');
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
  }
</script>
