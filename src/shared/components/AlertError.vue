<template>
    <div class="alert alert-error shadow-lg">
        <div>
            <IconCircleXFilled :size="24" />
            <span>{{ props.message }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { IconCircleXFilled } from '@tabler/icons-vue'
const props = defineProps<{
    message: string
}>()
</script>

<style scoped></style>
