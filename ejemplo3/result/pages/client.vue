<template>
	<section>
        <b-tabs v-model="activeTab">
            <b-tab-item label="List">
            	<table-client/>
            </b-tab-item>

            <b-tab-item label="Nuevo">
               <form-client/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script type="text/javascript">
	import TableClient from '~/components/client/table'
	import FormClient from '~/components/client/form'
	export default {
	  name: 'Clients',
	   data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        },
  		components: {TableClient,FormClient},
	}
</script>