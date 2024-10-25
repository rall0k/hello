<script setup>
	const { results } = await useFetch('/api/users')
</script>

<template>
	<pre>
		-- {{ results }} --
	</pre>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>
