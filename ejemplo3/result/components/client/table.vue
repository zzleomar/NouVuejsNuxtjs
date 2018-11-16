<template>
		<div>
			<b-table 
				:data="clients" 
				:paginated="isPaginated"
	            :per-page="perPage"
	            :current-page.sync="currentPage"
	            :pagination-simple="isPaginationSimple"
	            :default-sort-direction="defaultSortDirection">

				<template slot-scope="props">
						<b-table-column field="id" label="ID" centered>
	                        {{ props.row.id }}
	                </b-table-column>
	                <b-table-column field="name" label="Nombre" centered>
	                        {{ props.row.name }}
	                </b-table-column>
	                <b-table-column field="symbol" label="Simbolo" centered>
	                    <span class="tag is-success">
	                        {{ props.row.symbol }}
	                    </span>
	                </b-table-column>
	                <b-table-column field="website_slug" label="Website Slug" centered>
	                        {{ props.row.website_slug }}
	                </b-table-column>
	                <b-table-column field="opctions" label="Opciones" centered>
	                	<button class="button is-primary is-medium"
				            @click="isCardModalActive = true">
				            Ver
				        </button>
	                </b-table-column>
				</template>
			</b-table>

		<b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/img/placeholder-1280x960.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>
        </b-modal>
		</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {
	  data() {
	      return {
	      	clients:[],
	      	isPaginated: true,
            isPaginationSimple: false,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
            isCardModalActive: false
	      }
	  },
	  created(){
	  	axios.get("https://api.coinmarketcap.com/v2/listings/").then((respose)=>{
	  		this.clients=respose.data.data;
	  	})
	  }
	}
</script>