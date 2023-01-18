<template>
  <div class="modal fade" id="statusPermohonanModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">{{ title }}</h6>
        </div>
        <form id="statusPermohonanForm" @submit.prevent="submitForm" action="javascript:void(0)" method="POST">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label text-uppercase"><sup class="text-danger">(*)</sup> Status Title</label>
              <input type="text" id="statusTitleInput" class="form-control" :class="formErrors['statusTitleInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['statusTitleInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['statusTitleInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label text-uppercase">Status Subtitle</label>
              <input type="text" id="statusSubtitleInput" class="form-control" :class="formErrors['statusSubtitleInput']?'is-invalid':''"/>
              <div class="invalid-feedback" v-if="formErrors['statusSubtitleInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['statusSubtitleInput'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label text-uppercase"><sup class="text-danger">(*)</sup> HEX Color</label>
              <input type="text" id="statusHexColorInput" class="form-control" :class="formErrors['statusHexColorInput']?'is-invalid':''" maxlength="7"/>
              <div class="invalid-feedback" v-if="formErrors['statusHexColorInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['statusHexColorInput'][0] }}
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label text-uppercase"><sup class="text-danger">(*)</sup> Background Color <span id="dispBGColor" class="badge badge-pill ">Color</span></label>
              <select id="statusColorInput" class="form-select" :class="formErrors['statusColorInput']?'is-invalid':''" @change="dispBGColor">
                <option value="">Pilih</option>
                <option value="bg-gradient-primary">Gradient Primary</option>
                <option value="bg-gradient-info">Gradient Info</option>
                <option value="bg-gradient-secondary">Gradient Secondary</option>
                <option value="bg-gradient-success">Gradient Success</option>
                <option value="bg-gradient-danger">Gradient Danger</option>
                <option value="bg-gradient-warning">Gradient Warning</option>
                <option value="bg-gradient-dark">Gradient Dark</option>
              </select>
              <div class="invalid-feedback" v-if="formErrors['statusColorInput']">
                <i class="bx bx-x"></i>
                {{ formErrors['statusColorInput'][0] }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn-group">
              <button type="submit" class="btn bg-gradient-primary">Submit</button>
              <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { useToast,TYPE } from "vue-toastification"
  export default{
    name : 'ModalFormStatusPermohonan',
    data(){
      return{
        getData:{},
        formErrors: {},
        title:'',
        action:'',
      }
    },
    setup () {
      const toast = useToast();
      return {toast}
    },
    methods:{
      showModal(data,title,action){
        this.getData = data
        this.title = title
        this.action = action
        this.formErrors = {}
        $("#statusPermohonanModal").modal('show')
        $("#statusPermohonanForm")[0].reset()
        if (this.action == "Edit") {
          $("#statusTitleInput").val(data['status_title'])
          $("#statusSubtitleInput").val(data['status_subtitle'])
          $("#statusColorInput").val(data['status_color'])
          $("#statusHexColorInput").val(data['status_hex'])
        }
      },
      dispBGColor(){
        let status = $("#statusColorInput").val()
        $("#dispBGColor").removeClass('bg-gradient-primary')
        $("#dispBGColor").removeClass('bg-gradient-secondary')
        $("#dispBGColor").removeClass('bg-gradient-success')
        $("#dispBGColor").removeClass('bg-gradient-danger')
        $("#dispBGColor").removeClass('bg-gradient-warning')
        if(status != ''){
          $("#dispBGColor").addClass(status)
        }
      },
      submitForm(e) {
        this.$isLoading(true)
        this.formErrors = {};
        var form = e.target || e.srcElement
        if (this.action == "Edit") {
          var url = baseurl + "/api/admin/informasistatus/" + this.getData['id'];
          var put = 'put';
        } else {
          $("input[name=_method]").remove();
          var url = baseurl + "/api/admin/informasistatus";
          var put = "";
        }

        let datas = new FormData();
        datas.append("id", this.getData.id);
        datas.append("statusTitleInput", $("#statusTitleInput").val());
        datas.append("statusSubtitleInput", $("#statusSubtitleInput").val());
        datas.append("statusColorInput", $("#statusColorInput").val());
        datas.append("statusHexColorInput", $("#statusHexColorInput").val());
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(url, datas, {
            headers: {
              "X-HTTP-Method-Override": put,
              Accept: "application/json",
            },
          })
          .then((response) => {
            let resp = response.data;
            this.toast(resp.message, {
                type: resp.status,
                timeout: 3000
            });
            if (resp.status == "success") {
              $("#statusPermohonanModal").modal('hide')
              this.$parent.loadList()
            }
            this.$isLoading(false)
          })
          .catch((error) => {
            this.formErrors = error.response.data.errors;
            this.$isLoading(false)
          });
      },
    }
  }
</script>
