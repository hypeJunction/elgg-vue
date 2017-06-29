<?php

namespace Elgg\Vue;

/**
 * @access private
 */
class ComponentRegistrationService {

	/**
	 * @var self
	 */
	static $_instance;

	/**
	 * @array
	 */
	private $components = [];

	/**
	 * Returns a singleton
	 * @return self
	 */
	public static function getInstance() {
		if (is_null(self::$_instance)) {
			self::$_instance = new self(new SiteNotificationsTable());
		}

		return self::$_instance;
	}

	/**
	 * Register a Vue component for async loading
	 *
	 * @param string $name   Component name, e.g. elgg-likes
	 * @param string $module AMD module name, defaults to "components/$name"
	 *
	 * @return void
	 */
	public function register($name, $module = null) {
		if (!isset($module)) {
			$module = "components/$name";
		}

		$this->components[$name] = $module;
	}

	/**
	 * Unregister component
	 *
	 * @param string $name Component name
	 *
	 * @return void
	 */
	public function unregister($name) {
		unset($this->components[$name]);
	}

	/**
	 * Check if component is registered
	 *
	 * @param string $name Component name
	 *
	 * @return bool
	 */
	public function isRegistered($name) {
		return isset($this->components[$name]);
	}

	/**
	 * Get all registered components
	 *
	 * @return array
	 */
	public function getAll() {
		return $this->components;
	}
}