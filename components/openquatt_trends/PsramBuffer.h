#pragma once

#include <cstddef>
#include <cstdlib>

#include "esphome/core/helpers.h"

namespace esphome::openquatt_trends {

template<typename T> class PsramBuffer {
 public:
  PsramBuffer() = default;
  ~PsramBuffer() { this->release(); }

  PsramBuffer(const PsramBuffer &) = delete;
  PsramBuffer &operator=(const PsramBuffer &) = delete;

  bool allocate(size_t count) {
    this->release();
    if (count == 0) {
      return true;
    }

    RAMAllocator<T> external_allocator(RAMAllocator<T>::ALLOC_EXTERNAL);
    this->data_ = external_allocator.allocate(count);
    if (this->data_ == nullptr) {
      RAMAllocator<T> internal_allocator(RAMAllocator<T>::ALLOC_INTERNAL);
      this->data_ = internal_allocator.allocate(count);
      this->external_ = false;
      if (this->data_ == nullptr) {
        return false;
      }
    } else {
      this->external_ = true;
    }

    this->size_ = count;
    return true;
  }

  void release() {
    if (this->data_ != nullptr) {
      free(this->data_);  // NOLINT(cppcoreguidelines-owning-memory,cppcoreguidelines-no-malloc)
      this->data_ = nullptr;
    }
    this->size_ = 0;
    this->external_ = false;
  }

  T *data() { return this->data_; }
  const T *data() const { return this->data_; }
  size_t size() const { return this->size_; }
  bool is_external() const { return this->external_; }
  explicit operator bool() const { return this->data_ != nullptr; }

  T &operator[](size_t index) { return this->data_[index]; }
  const T &operator[](size_t index) const { return this->data_[index]; }

 private:
  T *data_{nullptr};
  size_t size_{0};
  bool external_{false};
};

}  // namespace esphome::openquatt_trends
