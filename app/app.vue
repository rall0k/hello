<script setup>
	const { data } = await useFetch('/api/users')
</script>

<template>
	<pre>
		{{ data }}
	</pre>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>
