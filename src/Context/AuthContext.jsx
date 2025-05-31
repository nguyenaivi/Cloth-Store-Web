import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Lấy user từ sessionStorage khi load trang
    const savedUser = sessionStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Khi user thay đổi, cập nhật sessionStorage
  //Khi lưu thì dùng dạng chuỗi JSON (JSON.stringify) để lưu trữ đối tượng user
  //Khi lấy thì dùng JSON.parse để chuyển đổi chuỗi JSON thành đối tượng
  useEffect(() => {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('user'); //sessionStorage là một kho lưu trữ tạm thời trong trình duyệt, dữ liệu sẽ bị xóa khi tab hoặc trình duyệt đóng lại
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;