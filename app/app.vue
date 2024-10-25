<script setup>
	const db = hubDatabase()
	console.log(db)
	
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>
