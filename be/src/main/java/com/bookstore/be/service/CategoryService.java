package com.bookstore.be.service;

import com.bookstore.be.model.Category;

import java.util.List;


public interface CategoryService {
    public List<Category> saveCate(List<Category> categories);
    public List<Category> getAllCate();
    public Category getCategoryById( int cateId);

    void deleteCategoryById(int id);
    void updateCategory(int categoryId, Category newCategory);

}
