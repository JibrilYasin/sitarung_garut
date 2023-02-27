<template>
  <div class="modal fade" id="filterTanggalDashboardModal" tabindex="-1" role="dialog" aria-labelledby="filterTanggalDashboardModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="filterTanggalDashboardModalLabel">Filter Tanggal</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <label class="form-label">Tanggal Awal</label>
              <div class="input-group date datepicker">
                <input type="text" class="form-control" id="startdateDashbaord" :value="$parent.startdateDashbaord" readonly />
                <span class="input-group-text"><i class="fs-4 bx bx-calendar-week"></i></span>
              </div>
            </div>
            <div class="col-md-6">
              <label class="form-label">Tanggal Akhir</label>
              <div class="input-group date datepicker">
                <input type="text" class="form-control" id="enddateDashbaord" :value="$parent.enddateDashbaord" readonly />
                <span class="input-group-text"><i class="fs-4 bx bx-calendar-week"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <button type="button" class="btn bg-gradient-primary" @click="$parent.boundMap = false;$parent.loadStatistik();$parent.loadMap('empty')" data-bs-dismiss="modal">Submit</button>
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name : 'FilterTanggalDashboard',
    methods:{
      showModal(){
        $("#filterTanggalDashboardModal").modal('show')
      }
    }
  }
</script>
