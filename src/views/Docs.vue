<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import AnchorLink from '@/components/AnchorLink.vue'
import Anchor from '@/components/Anchor.vue'
import { highLightCode } from '@/utils/highLightCode'
import Table from '@/components/Table.vue'
import { TableItem } from '@/common/types'

const value = ref<string>('')
const introShellHtml = computed<string>(() => {
  return highLightCode('https://sm.ms/api/v2/')
})
const authenticShellHtml = computed<string>(() => {
  return highLightCode(
    'Authorization: "Bears 14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf"'
  )
})
const tokenShellHtml = computed<string>(() => {
  return highLightCode('/token')
})
const profileShellHtml = computed<string>(() => {
  return highLightCode('/profile')
})
const imageClearShellHtml = computed<string>(() => {
  return highLightCode('/clear')
})

const imageUploadShellHtml = computed<string>(() => {
  return highLightCode('/upload')
})

const getTokenTable = ref<TableItem[]>([
  {
    key: '0',
    name: 'username',
    type: 'String',
    description: 'email'
  },
  {
    key: '1',
    name: 'password',
    type: 'String',
    description: ''
  }
])
const getTokenResTable = ref<TableItem[]>([
  {
    key: '1',
    name: 'data',
    type: 'Object',
    description: 'data'
  },
  {
    key: '2',
    name: 'success',
    type: 'Boolean',
    description: 'Request status.'
  },
  {
    key: '3',
    name: 'code',
    type: 'String',
    description: 'Request status code.'
  },
  {
    key: '4',
    name: 'RequestId',
    type: 'String',
    description: 'Request ID.'
  },
  {
    key: '5',
    name: 'message',
    type: 'String',
    description: 'Message.'
  },
  {
    key: '6',
    name: 'token',
    type: 'String',
    description: 'API Token.'
  }
])
const tokenHtml = computed<string>(() => {
  return highLightCode(
    `{
    "success": true,
    "code": "success",
    "message": "Get API token success.",
    "data": {
        "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    "RequestId": "8DCED45B-5E9F-43B1-90C6-29D562F250D5"
}`,
    'json'
  )
})

const getProfileTable = ref<TableItem[]>([
  {
    key: '0',
    name: 'username',
    type: 'String',
    description: 'email'
  },
  {
    key: '1',
    name: 'password',
    type: 'String',
    description: ''
  }
])
const getProfileResTable = ref<TableItem[]>([
  {
    key: '1',
    name: 'data',
    type: 'Object',
    description: 'data'
  },
  {
    key: '2',
    name: 'success',
    type: 'Boolean',
    description: 'Request status.'
  },
  {
    key: '3',
    name: 'code',
    type: 'String',
    description: 'Request status code.'
  },
  {
    key: '4',
    name: 'RequestId',
    type: 'String',
    description: 'Request ID.'
  },
  {
    key: '5',
    name: 'message',
    type: 'String',
    description: 'Message.'
  },
  {
    key: '6',
    name: 'token',
    type: 'String',
    description: 'API Token.'
  }
])
const profileHtml = computed<string>(() => {
  return highLightCode(
    `{
    "success": true,
    "code": "success",
    "message": "Get API token success.",
    "data": {
        "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    "RequestId": "8DCED45B-5E9F-43B1-90C6-29D562F250D5"
}`,
    'json'
  )
})

const clearImgTable = ref<TableItem[]>([
  {
    key: '0',
    name: 'username',
    type: 'String',
    description: 'email'
  },
  {
    key: '1',
    name: 'password',
    type: 'String',
    description: ''
  }
])
const clearImgResTable = ref<TableItem[]>([
  {
    key: '1',
    name: 'data',
    type: 'Object',
    description: 'data'
  },
  {
    key: '2',
    name: 'success',
    type: 'Boolean',
    description: 'Request status.'
  },
  {
    key: '3',
    name: 'code',
    type: 'String',
    description: 'Request status code.'
  },
  {
    key: '4',
    name: 'RequestId',
    type: 'String',
    description: 'Request ID.'
  },
  {
    key: '5',
    name: 'message',
    type: 'String',
    description: 'Message.'
  },
  {
    key: '6',
    name: 'token',
    type: 'String',
    description: 'API Token.'
  }
])
const clearImgHtml = computed<string>(() => {
  return highLightCode(
    `{
    "success": true,
    "code": "success",
    "message": "Get API token success.",
    "data": {
        "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    "RequestId": "8DCED45B-5E9F-43B1-90C6-29D562F250D5"
}`,
    'json'
  )
})

const uploadImgTable = ref<TableItem[]>([
  {
    key: '0',
    name: 'username',
    type: 'String',
    description: 'email'
  },
  {
    key: '1',
    name: 'password',
    type: 'String',
    description: ''
  }
])
const uploadImgResTable = ref<TableItem[]>([
  {
    key: '1',
    name: 'data',
    type: 'Object',
    description: 'data'
  },
  {
    key: '2',
    name: 'success',
    type: 'Boolean',
    description: 'Request status.'
  },
  {
    key: '3',
    name: 'code',
    type: 'String',
    description: 'Request status code.'
  },
  {
    key: '4',
    name: 'RequestId',
    type: 'String',
    description: 'Request ID.'
  },
  {
    key: '5',
    name: 'message',
    type: 'String',
    description: 'Message.'
  },
  {
    key: '6',
    name: 'token',
    type: 'String',
    description: 'API Token.'
  }
])
const uploadImgHtml = computed<string>(() => {
  return highLightCode(
    `{
    "success": true,
    "code": "success",
    "message": "Get API token success.",
    "data": {
        "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    "RequestId": "8DCED45B-5E9F-43B1-90C6-29D562F250D5"
}`,
    'json'
  )
})
</script>

<template>
  <div class="docs">
    <div class="nav">
      <!--内容检索-->
      <div class="search">
        <a-input v-model:value="value" placeholder="搜索" allow-clear />
      </div>
      <Anchor customClass="customClass">
        <!--        概括-->
        <AnchorLink href="#api-basic" :nested="false">
          <template #default>
            <div class="title">概括</div>
          </template>
        </AnchorLink>
        <AnchorLink href="#api-intro" :nested="true">
          <template #default>
            <div class="navItem">接口简介</div>
          </template>
        </AnchorLink>
        <AnchorLink href="#api-authentication" :nested="true">
          <template #default>
            <div class="navItem">用户认证</div>
          </template>
        </AnchorLink>

        <!--        用户接口-->
        <AnchorLink href="#api-user" :nested="false">
          <template #default>
            <div class="title">用户相关</div>
          </template>
        </AnchorLink>
        <AnchorLink href="#api-token" :nested="true">
          <template #default>
            <div class="navItem">获取Token</div>
          </template>
        </AnchorLink>
        <AnchorLink href="#api-profile" :nested="true">
          <template #default>
            <div class="navItem">获取用户信息</div>
          </template>
        </AnchorLink>

        <!--        图片上传接口-->
        <AnchorLink href="#api-image" :nested="false">
          <template #default>
            <div class="title">图片相关</div>
          </template>
        </AnchorLink>
        <!--增-->
        <AnchorLink href="#api-upload" :nested="true">
          <template #default>
            <div class="navItem">图片上传</div>
          </template>
        </AnchorLink>
        <!--清空-->
        <AnchorLink href="#api-clearAll" :nested="true">
          <template #default>
            <div class="navItem">清空记录</div>
          </template>
        </AnchorLink>
        <!--删除-->
        <AnchorLink href="#api-delete" :nested="true">
          <template #default>
            <div class="navItem">删除图片</div>
          </template>
        </AnchorLink>
        <!--查询-->
        <AnchorLink href="#api-find" :nested="true">
          <template #default>
            <div class="navItem">查找图片</div>
          </template>
        </AnchorLink>
        <AnchorLink href="#api-base" :nested="true">
          <template #default>
            <div class="navItem">查看容量</div>
          </template>
        </AnchorLink>
      </Anchor>
    </div>
    <div class="content">
      <!--      概况-->
      <h2 id="api-basic">概括</h2>

      <div class="section">
        <h4 id="api-intro">接口介绍</h4>
        <p>
          SM.MS API exposes the infrastructure via a standardized programmatic
          interface.
        </p>
        <p>
          The API is accessed by making HTTPS requests to a specific version endpoint
          URL, in which GET, POST, PUT, PATCH, and DELETE methods dictate how your
          interact with the information available. Every endpoint is accessed only via
          the SSL-enabled HTTPS (port 443) protocol.
        </p>
        <p>The stable base URL for all Version 2 HTTPS endpoints is:</p>
        <pre class="language-shell scroll-container" v-html="introShellHtml" />
      </div>

      <div class="section">
        <h4 id="api-authentication">用户认证</h4>
        <p>
          Authenticate requests by setting the Authorization header with a valid API
          key.
        </p>
        <p>We accept just the API key:</p>
        <pre class="language-html scroll-container" v-html="authenticShellHtml" />
      </div>
      <!--用户相关-->
      <h2 id="api-user">用户相关</h2>
      <div class="section">
        <h4 id="api-token">获取Token</h4>
        <span class="method">POST</span>
        <pre class="language-json scroll-container" v-html="tokenShellHtml" />
        <p>参数</p>
        <Table :data-source="getTokenTable" />
        <p>响应</p>
        <Table :data-source="getTokenResTable" />
        <p>Success Response</p>
        <pre class="language-json scroll-container" v-html="tokenHtml" />
      </div>
      <div class="section">
        <h4 id="api-profile">获取用户信息</h4>
        <span class="method">POST</span>
        <pre class="language-html scroll-container" v-html="profileShellHtml" />
        <p>参数</p>
        <Table :data-source="getProfileTable" />
        <p>响应</p>
        <Table :data-source="getProfileResTable" />
        <p>Success Response</p>
        <pre class="language-json scroll-container" v-html="profileHtml" />
      </div>
      <!--图片相关-->
      <h2 id="api-image">图片相关</h2>
      <div class="section">
        <h4 id="api-upload">图片上传</h4>
        <span class="method">POST</span>
        <pre class="language-html scroll-container" v-html="imageUploadShellHtml" />
        <p>参数</p>
        <Table :data-source="uploadImgTable" />
        <p>响应</p>
        <Table :data-source="uploadImgResTable" />
        <p>Success Response</p>
        <pre class="language-json scroll-container" v-html="uploadImgHtml" />
      </div>
      <div class="section">
        <h4 id="api-clearAll">清空图片</h4>
        <span class="method">POST</span>
        <pre class="language-html scroll-container" v-html="imageClearShellHtml" />
        <p>参数</p>
        <Table :data-source="clearImgTable" />
        <p>响应</p>
        <Table :data-source="clearImgResTable" />
        <p>Success Response</p>
        <pre class="language-json scroll-container" v-html="clearImgHtml" />
      </div>
      <div class="section">
        <h4 id="api-delete">删除图片</h4>
      </div>
      <div class="section">
        <h4 id="api-find">查找图片</h4>
      </div>
      <div class="section">
        <h4 id="api-base">查看容量</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.docs {
  display: flex;
  > .nav {
    width: 240px;
    margin: 0;
    padding: 20px 20px 20px 20px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
    z-index: 10;
    > .search {
      margin-bottom: 20px;
    }
    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.8em;
    }
    .navItem {
      font-weight: 500;
      line-height: 2em;
    }
  }
  > .content {
    flex-grow: 10;
    margin-left: 240px;
    padding: 40px 240px 0 40px;
    font-size: 16px;
    .method {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 14px;
      display: inline-block;
      margin: 0 0 5px 0;
      padding: 4px 5px;
      border-radius: 6px;
      text-transform: uppercase;
      background-color: #4070ec;
      color: #ffffff;
    }
    .section {
      margin-bottom: 60px;
    }
    h2 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    h4 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
