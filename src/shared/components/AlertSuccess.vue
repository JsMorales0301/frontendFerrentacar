<template>
    <div class="alert alert-success shadow-lg">
        <div>
            <IconCircleCheckFilled :size="24" />
            <span>{{ props.message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconCircleCheckFilled } from '@tabler/icons-vue'

const props = defineProps<{
    message: string
}>()
</script>

<style scoped></style>
