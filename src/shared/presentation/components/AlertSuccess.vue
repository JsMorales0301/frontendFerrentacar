<template>
    <div class="alert alert-success shadow-lg">
        <div>
            <IconCircleCheck :size="24" />
            <span>{{ props.message }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IconCircleCheck } from '@tabler/icons-vue'
const props = defineProps<{
    message: string
}>();
</script>
