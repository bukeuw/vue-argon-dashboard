<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" icon="fa fa-plus">Add New</base-button>
          <base-button type="primary" size="sm" icon="fa fa-upload">Bulk Upload</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data.sync="paginatedCustomers">
        <template v-slot:columns>
          <th>#</th>
          <th>Instansi</th>
          <th>PIC</th>
          <th>No Telp</th>
          <th>Alamat</th>
          <th></th>
        </template>

        <template v-slot:default="{row}">
          <th scope="row">
            {{row.id}}
          </th>
          <td class="budget">
            {{row.instansi}}
          </td>
          <td>
            {{row.pic}}
          </td>
          <td>
            {{row.telp}}
          </td>

          <td>
            {{row.alamat}}
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#" @click="showDetailModal(row)">View Detail</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#" @click="showDeleteModal(row)">Delete</a>
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="totalCustomer" :per-page="pagination.perPage" :value="currentPage"></base-pagination>
    </div>

    <modal :show.sync="modals.detailmodal"
            body-classes="p-0"
            modal-classes="modal-dialog-centered">
      <template slot="header">
        <h5 class="modal-title">Customer {{ selectedItem.id }} Detail</h5>
      </template>
      <div>
        ...
      </div>
      <template slot="footer">
        <base-button type="secondary" @click="modals.detailmodal = false">Close</base-button>
        <base-button type="primary">Print</base-button>
      </template>
    </modal>

    <modal :show.sync="modals.deletemodal">
      <template slot="header">
        <h5 class="modal-title">Confirm Delete</h5>
      </template>
      <div>
        Delete {{ selectedItem.instansi  }}?
      </div>
      <template slot="footer">
        <base-button type="secondary" @click="modals.deletemodal = false">Cancel</base-button>
        <base-button type="danger">Delete</base-button>
      </template>
    </modal>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'data-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    methods: {
      showDetailModal (data) {
        this.modals.detailmodal = true
        this.selectedItem = data
      },
      showDeleteModal (data) {
        this.modals.deletemodal = true
        this.selectedItem = data
      }
    },
    computed: {
      ...mapGetters([
          'paginatedCustomers',
          'totalCustomer',
          'currentPage'
      ])
    },
    data() {
      return {
        modals: {
          detailmodal: false,
          deletemodal: false
        },
        pagination: {
          perPage: 25,
          page: 1
        },
        selectedItem: {}
      }
    }
  }
</script>
<style>
</style>
