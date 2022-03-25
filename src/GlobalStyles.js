import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    .ant-spin-spinning {
        display: flex;
        justify-content: center;
        margin-top: 400px;
        z-index: 25;
    }

    .ant-spin-dot {
        color: #d4260f;
        font-size: 50px;
    }

    #components-layout-demo-side .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
      }
      
      .site-layout .site-layout-background {
        background: #fff;
      }

      .ant-avatar {
        margin-left: -120px;
        margin-bottom: 20px;
        float: right;
        margin-top: 15px;
        margin-right: 20px;
      }

    .ant-menu-dark.ant-menu-horizontal {
        background-color: #1f9cdb;
    }

    .ant-card-head {
        background-color: #e88b66;
    }

    .ant-card-body {
        height: 100px;
    }

    .ant-card {
        border: 2px solid saddlebrown;
    }

    .layout-background {
        padding: 24;
        min-height: 87vh;
    }

    .img-logo {
        height: 109px;
        width: 161px;
    }

    .posts-card-pagination {
        float: right;
        margin-right: 25px;
        margin-top: 90px;
    }

    .ant-steps {
        padding: 25px;
    }
`;

export default Global;