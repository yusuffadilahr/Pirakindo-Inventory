import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Navigate, useNavigate } from "react-router-dom";
import 'bulma/css/bulma.css';

const MenuSamping = () => {
    const Navigate = useNavigate();

    const handleNavigate = (path) => {
        Navigate(path);
    };

    return (
        <Sidebar style={{
            color: '#000',
            height: '100vh',
            borderRight: '1px solid #ddd',
        }}>
            <Menu style={{
                padding: '20px 0',
            }}>
                <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/dashboard")}>
                    Dashboard
                </MenuItem>
                <SubMenu label="Monitoring">
                    <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/kategori")}>
                        Kategori Alat
                    </MenuItem>
                    <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/alat-keluar")}>
                        Alat Keluar
                    </MenuItem>
                    <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/alat-masuk")}>
                        Alat Masuk
                    </MenuItem>
                </SubMenu>
                <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/documentation")}>
                    Documentation
                </MenuItem>
                <MenuItem style={{ color: '#000' }} onClick={() => handleNavigate("/report")}>
                    Report
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default MenuSamping;