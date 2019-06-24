import { PureComponent } from "react";

import { NavLink } from 'umi';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {

    render() {
        return (
            <div className={styles.right}>
                <NavLink to="/" className="top_link" key="logo1">
                    <span>云门户</span>
                </NavLink>
                <NavLink to="/iaas/" className="top_link" key="logo3">
                    <span>基础设施管理</span>
                </NavLink>
                <NavLink to="/paas/" className="top_link" key="logo4">
                    <span>系统配置管理</span>
                </NavLink>
                <NavLink to="/tools/" className="top_link" key="logo5">
                    <span>测试工具</span>
                </NavLink>
                <NavLink to="/software/" className="top_link" key="logo6">
                    <span>软件资产库</span>
                </NavLink>
                <NavLink to="/proj/" className="top_link" key="logo7">
                    <span>测试项目管理</span>
                </NavLink>
                <NavLink to="/knowledge/" className="top_link" key="logo8">
                    <span>知识库</span>
                </NavLink>
            </div>
        );
    }
}