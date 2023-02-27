<template>
  <div class="modal fade" id="detailNotifikasiModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Detail Notifikasi</h6>
        </div>
        <div class="modal-body">
          <p class="mb-2 fw-bold text-uppercase">{{ getData['notif_title'] }}</p>
          <p class="text-secondary">{{ getData['notif_message'] }}</p>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name : 'ModalDetailNotifikasi',
    data(){
      return{
        getData:{},
      }
    },
    methods:{
      showModal(data){
        this.getData = data
        $("#detailNotifikasiModal").modal('show')
        this.readNotif(data)
      },
      readNotif(data){
        if(data['notif_read'] == 'Y'){
          return false;
        }
        this.$isLoading(true)
        let obj = new Object();
        obj.id = data['id'];
        window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.state.setTokenCMS}`;
        axios
          .post(baseurl + "/api/notif/" + data['id'], obj, {
            headers: {
              "X-HTTP-Method-Override": 'PUT',
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.$parent.totalnotif()
            this.$parent.loadList()
            this.$isLoading(false)
          })
          .catch((error) => {
            this.$isLoading(false)
            this.$store.dispatch("getStatusNotif",{ self: this,error:error });
          });
      },
    }
  }
</script>
