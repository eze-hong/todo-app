function TodoFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter">
      <button
        type="button"
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        전체
      </button>
      <button
        type="button"
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => onFilterChange('active')}
      >
        미완료
      </button>
      <button
        type="button"
        className={currentFilter === 'done' ? 'active' : ''}
        onClick={() => onFilterChange('done')}
      >
        완료
      </button>
    </div>
  )
}

export default TodoFilter
