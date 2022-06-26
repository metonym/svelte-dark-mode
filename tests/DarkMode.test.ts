import { test, expect, describe, afterEach, vi } from "vitest";
import type { SvelteComponent } from "svelte";
import userEvent from "@testing-library/user-event";
import DarkMode from "./DarkMode.test.svelte";

const MatchMediaMock = vi.fn(() => ({
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

vi.stubGlobal("matchMedia", MatchMediaMock);

const consoleLog = vi.spyOn(console, "log");

describe("svelte-dark-mode", () => {
  let instance: null | SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
    consoleLog.mockReset();
  });

  test("DarkMode.test.svelte", async () => {
    const target = document.body;

    instance = new DarkMode({ target });

    const h1 = document.querySelector("h1")!;
    const button = document.querySelector("button")!;
    const isMode = (mode: "light" | "dark") => {
      // assert `theme` binding
      expect(h1.textContent).toEqual(`This is ${mode} mode.`);

      // assert document.body class
      expect(target.className).toEqual(mode);

      // assert dispatched "change" event
      expect(consoleLog).toBeCalledWith(mode);

      // assert local storage
      expect(localStorage.getItem("key")).toEqual(mode);
    };

    isMode("light");
    await userEvent.click(button);
    isMode("dark");
    await userEvent.click(button);
    isMode("light");
  });
});
